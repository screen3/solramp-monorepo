const Joi = require("joi");
const model = require("../db/model");

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
        token: Joi.string().required().length(44),
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

const transactionApprove = (req, res) => {
    //Check if transaction exist with id and business_id
    //Update to completed, then send payment
    // and post to webhook if it exist
};

module.exports = {
    update,
    owner,
    transactionNew,
    transactionList,
    transactionApprove,
};
