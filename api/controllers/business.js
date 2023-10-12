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

module.exports = {
    update,
};
