const Joi = require("joi");
const model = require("../db/model");
const web3 = require("@solana/web3.js");
const splToken = require("@solana/spl-token");
const bs58 = require("bs58");
const email = require("../notification/email");
const { updateSignature } = require("../db/model/transaction");

//https://spl-token-faucet.com/?token-name=USDC-Dev
const tokens = {
    USDC: {
        address: "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr",
        decimals: 6,
        authority: "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr",
    },
};

const update = async function (req, res) {
    const schema = Joi.object({
        business_name: Joi.string().min(3).required(),
        default_currency: Joi.string().valid("AED", "NGN", "USD").required(),
        preferred_channels: Joi.string().required(),
        recipient_address: Joi.string().required().length(44),
        logo: Joi.string().uri(),
        callback_url: Joi.string().uri(),
        webhook_url: Joi.string().uri(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            status: "error",
            message: error.details[0].message,
        });
    }

    await model.business.updateBusinessById(req.auth.user.company_id, req.body);

    return res.json({
        status: "ok",
        message: "Business updated",
    });
};

const owner = async function (req, res) {
    const rep = await model.business.getBusinessOwner(req.auth.user.company_id);

    if (rep.length > 0) {
        delete rep?.[0].password;
    }
    return res.json({
        status: "ok",
        owner: rep?.[0],
    });
};

const transactionList = async function (req, res) {
    const ref = req.params.ref;
    const business = await model.business.getBusinessByRef(ref);

    if (business.length === 0) {
        return res.status(404).json({
            status: "error",
            message: "Business not found",
        });
    }

    const transactions = await model.transaction.list(business[0].id);

    return res.json({
        status: "ok",
        transactions,
    });
};

const transactionNew = async function (req, res) {
    const schema = Joi.object({
        channel: Joi.string().valid("BANK", "WISE", "QR").required(),
        currency: Joi.string().valid("AED", "NGN", "USD").required(),
        token: Joi.string().required().length(44),
        recipient: Joi.string().required().length(44),
        customer_email: Joi.string().required().email(),
        customer_name: Joi.string(),
        amount: Joi.required(),
        fee: Joi.required(),
        status: Joi.string()
            .valid("COMPLETED", "CANCELED", "REJECTED", "PENDING")
            .required(),
        start_time: Joi.date().iso(),
        end_time: Joi.date().iso(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            status: "error",
            message: error.details[0].message,
        });
    }

    const ref = req.params.ref;
    try {
        const business = await model.business.getBusinessByRef(ref);

        if (business.length === 0) {
            return res.status(404).json({
                status: "error",
                message: "Business not found",
            });
        }

        let customer;

        customer = await model.customer.getCustomerByEmail(
            req.body.customer_email
        );

        if (customer.length === 0) {
            customer = await model.customer.createCustomer(business[0].id, {
                email: req.body.customer_email,
                name: req.body.customer_name,
            });
        }

        const trx = await model.transaction.create(
            business[0]?.id,
            customer[0]?.id,
            req.body
        );

        email.sendMoneySent({
            fiat: req.body?.currency,
            token: "USDC",
            amount: req.body?.amount,
            link: `${process.env.APP_HOST}/api/v1/business/${business[0]?.business_ref}/transaction/${trx.insertId}/approve`,
            user: {
                email: "oluwafemialofe@gmail.com",
                name: `Emmanuel`,
            },
        });

        return res.json({
            status: "ok",
            message: "Transaction created",
            data: {
                id: trx.insertId,
            },
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

const transactionApprove = async (req, res) => {
    //Check if transaction exist with id and business_id
    //Update to completed, then send payment
    // and post to webhook if it exist

    const businessId = req.params.ref;
    const transactionId = req.params.transactionId;

    const business = await model.business.getBusinessByRef(businessId);

    if (business.length === 0) {
        return res.status(404).json({
            status: "error",
            message: "Business not found",
        });
    }

    const transaction = await model.transaction.getTransactionById(
        transactionId
    );

    if (transaction.length === 0) {
        return res.status(404).json({
            status: "error",
            message: "Transaction not found",
        });
    }

    if (transaction[0].status === "COMPLETED") {
        return res.status(200).json({
            status: "ok",
            message: "Transaction already approved",
            signature: transaction?.[0]?.signature,
        });
    }

    console.log(
        transaction[0].token,
        6,
        transaction[0].recipient,
        transaction[0].amount
    );
    sendToken(
        transaction[0].token,
        6,
        transaction[0].recipient,
        transaction[0].amount
    )
        .then(async (signature) => {
            await model.transaction.updateSignature(
                signature,
                transaction[0].id
            );

            return res.json({
                status: "ok",
                message: "Transaction approved",
                signature,
            });
        })
        .catch((error) => {
            console.log(error, "error");
            return res.status(500).json({
                status: "error",
                message: error.message,
            });
        });
};

const sendToken = async (
    tokenAddress,
    tokenDecimals,
    recipientAddress,
    payment
) => {
    return new Promise(async (resolve, reject) => {
        console.log(process.env.MASTER_KEY);
        try {
            const senderPrivateKey = process.env.MASTER_KEY; // Sender's private key
            const amount = payment * 10 ** tokenDecimals; // Number of tokens to transfer

            // Initialize a connection to the Solana network
            const connection = new web3.Connection(
                web3.clusterApiUrl("testnet"),
                "confirmed"
            ); // Use the appropriate network

            const fromWallet = web3.Keypair.fromSecretKey(
                Uint8Array.from(bs58.decode(senderPrivateKey))
            );
            const toWallet = new web3.PublicKey(recipientAddress);

            (async () => {
                var USDC_pubkey = new web3.PublicKey(tokenAddress);
                var USDC_Token = new splToken.Token(
                    connection,
                    USDC_pubkey,
                    splToken.TOKEN_PROGRAM_ID,
                    fromWallet
                );

                // Create associated token accounts for my token if they don't exist yet
                var fromTokenAccount =
                    await USDC_Token.getOrCreateAssociatedAccountInfo(
                        fromWallet.publicKey
                    );
                var toTokenAccount =
                    await USDC_Token.getOrCreateAssociatedAccountInfo(toWallet);

                // Add token transfer instructions to transaction
                var transaction = new web3.Transaction().add(
                    splToken.Token.createTransferInstruction(
                        splToken.TOKEN_PROGRAM_ID,
                        fromTokenAccount.address,
                        toTokenAccount.address,
                        fromWallet.publicKey,
                        [],
                        amount
                    )
                );

                // Sign transaction, broadcast, and confirm
                var signature = await web3.sendAndConfirmTransaction(
                    connection,
                    transaction,
                    [fromWallet]
                );

                resolve(signature);
            })();
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    update,
    owner,
    transactionNew,
    transactionList,
    transactionApprove,
};
