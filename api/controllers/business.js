const Joi = require("joi");
const model = require("../db/model");

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

const transactionNew = async function (req, res) {
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
            console.log("not found");
            customer = await model.customer.createCustomer({
                email: req.body.customer_email,
                name: req.body.customer_name,
            });
        }

        const transaction = await model.transaction.create(
            business[0].id,
            customer[0].id,
            req.body
        );

        return res.json({
            status: "ok",
            message: "Transaction created",
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

module.exports = {
    update,
    owner,
    transactionNew,
};
