const {transaction} = require("../db/model");
const express = async (req, res) => {
    return res.json({
        status: "ok",
        ad: [
            {
                token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                fiat: {
                    code: "AED",
                    country: "UAE",
                },
                seller: {
                    account_name: "Emmanuel Joseph",
                    iban: "0392892390230923",
                    account_number: "9828328",
                    bank_name: "Mashreq Bank",
                    email: "emarjay921@gmail.com",
                },
                price: 3.65,
                method: "bank",
            },
            {
                token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                fiat: {
                    code: "AED",
                    country: "UAE",
                },
                seller: {
                    account_name: "Emmanuel Joseph",
                    iban: "0392892390230923",
                    account_number: "9828328",
                    bank_name: "Mashreq Bank",
                    email: "emarjay921@gmail.com",
                },
                price: 3.65,
                method: "wise",
            },
            {
                token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                fiat: {
                    code: "NGN",
                    country: "NG",
                },
                seller: {
                    account_name: "Emmanuel Joseph",
                    account_number: "0126864523",
                    bank_name: "GT Bank",
                    email: "emarjay921@gmail.com",
                },
                method: "bank",
                price: 3.65,
            },
            {
                token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                fiat: {
                    code: "NGN",
                    country: "NG",
                },
                seller: {
                    account_name: "Emmanuel Joseph",
                    account_number: "0126864523",
                    bank_name: "GT Bank",
                    email: "emarjay921@gmail.com",
                },
                method: "wise",
                price: 3.65,
            },
            {
                token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                fiat: {
                    code: "USD",
                    country: "US",
                },
                seller: {
                    account_name: "Emmanuel Joseph",
                    account_number: "0126864523",
                    bank_name: "GT Bank",
                    email: "emarjay921@gmail.com",
                },
                method: "bank",
                price: 3.65,
            },
            {
                token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                fiat: {
                    code: "USD",
                    country: "US",
                },
                seller: {
                    account_name: "Emmanuel Joseph",
                    account_number: "0126864523",
                    bank_name: "GT Bank",
                    email: "emarjay921@gmail.com",
                },
                method: "wise",
                price: 3.65,
            },
            {
                token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                fiat: {
                    code: "AED",
                    country: "UAE",
                },
                seller: {
                    account_name: "Emmanuel Joseph",
                    iban: "0392892390230923",
                    account_number: "9828328",
                    bank_name: "Mashreq Bank",
                    email: "emarjay921@gmail.com",
                },
                price: 3.65,
                method: "bank",
            },
            {
                token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                fiat: {
                    code: "AED",
                    country: "UAE",
                },
                seller: {
                    account_name: "Emmanuel Joseph",
                    iban: "0392892390230923",
                    account_number: "9828328",
                    bank_name: "Mashreq Bank",
                    email: "emarjay921@gmail.com",
                },
                price: 3.65,
                method: "wise",
            },
            {
                token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                fiat: {
                    code: "NGN",
                    country: "NG",
                },
                seller: {
                    account_name: "Emmanuel Joseph",
                    account_number: "0126864523",
                    bank_name: "GT Bank",
                    email: "emarjay921@gmail.com",
                },
                method: "bank",
                price: 3.65,
            },
            {
                token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                fiat: {
                    code: "NGN",
                    country: "NG",
                },
                seller: {
                    account_name: "Emmanuel Joseph",
                    account_number: "0126864523",
                    bank_name: "GT Bank",
                    email: "emarjay921@gmail.com",
                },
                method: "wise",
                price: 3.65,
            },
            {
                token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                fiat: {
                    code: "USD",
                    country: "US",
                },
                seller: {
                    account_name: "Emmanuel Joseph",
                    account_number: "0126864523",
                    bank_name: "GT Bank",
                    email: "emarjay921@gmail.com",
                },
                method: "bank",
                price: 3.65,
            },
            {
                token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                fiat: {
                    code: "USD",
                    country: "US",
                },
                seller: {
                    account_name: "Emmanuel Joseph",
                    account_number: "0126864523",
                    bank_name: "GT Bank",
                    email: "emarjay921@gmail.com",
                },
                method: "wise",
                price: 3.65,
            },
        ],
    });
};

module.exports = {
    express,
    /**
     * @param req {Request}
     * @param res {Response}
     * @returns {Promise<void>}
     */
    async transaction(req, res) {
        const trx = await transaction.create(req.body.businessId, req.body.customerId, req.body);
        console.log(trx)
    }
};
