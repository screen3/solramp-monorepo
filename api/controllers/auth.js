const Joi = require("joi");
const model = require("../db/model");

const login = function (req, res) {
    return res.send("Login");
};

const register = function (req, res) {
    const schema = Joi.object({
        business_name: Joi.string().min(3).required(),
        representative_email: Joi.string().email().required(),
        representative_firstname: Joi.string().min(3).required(),
        representative_lastname: Joi.string().min(3).required(),
        representative_phone: Joi.string().required(),
        default_currency: Joi.string().valid("AED", "NGN", "USD").required(),
        country_iso2_code: Joi.string().valid("AE", "NG", "US").required(),
        password: Joi.string().min(8).required().alphanum(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            status: "error",
            message: error.details[0].message,
        });
    }

    model.business
        .create(req.body)
        .then((result) => {
            return res.send({
                status: "ok",
                message: "Business created",
            });
        })
        .catch((err) => {
            return res.status(400).send({
                status: "error",
                message: err.message,
            });
        });
};

module.exports = {
    login,
    register,
};
