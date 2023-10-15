const Joi = require("joi");
const model = require("../db/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const e = require("express");

const update = async function (req, res) {
    const schema = Joi.object({
        firstname: Joi.string().min(3).required(),
        lastname: Joi.string().min(3).required(),
        phone: Joi.string().required(),
        country_iso2_code: Joi.string().valid("AE", "NG", "US").required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            status: "error",
            message: error.details[0].message,
        });
    }

    await model.user.updateUserByEmail(req.auth.user.email, req.body);

    return res.json({
        status: "ok",
        message: "User updated",
    });
};

const login = async function (req, res) {
    const found = await model.user.getUserByUsername(req.body.email);

    if (found.length > 0) {
        const user = found[0];

        const match = bcrypt.compareSync(req.body.password, user.password);

        if (!match) {
            return res.status(400).json({
                status: "error",
                message: "Invalid username or password",
            });
        }

        delete user.password;

        jwt.sign(
            { user },
            process.env.JWT_SECRET,
            { expiresIn: "24h" },
            (err, token) => {
                if (err) {
                    return res.status(400).json({
                        status: "error",
                        message: err.message,
                    });
                } else {
                    res.cookie("Authorization", token, {
                        httpOnly: true,
                        maxAge: 24 * 60 * 60 * 1000, // 24 hours
                    });

                    res.send({
                        message: "success",
                    });
                }
            }
        );
    } else {
        return res.status(400).json({
            status: "error",
            message: "Invalid username or password",
        });
    }
};

const register = async function (req, res) {
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

    const found = await model.business.getBusinessByName(
        req.body.business_name
    );

    if (found.length > 0) {
        return res.status(400).json({
            status: "error",
            message: "Business already exists",
        });
    }

    const exist = await model.user.getUserByUsername(
        req.body.representative_email
    );

    if (exist.length > 0) {
        return res.status(400).json({
            status: "error",
            message: "Email already exists",
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
    update,
};
