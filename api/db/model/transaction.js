const conn = require("../conn.js");

const list = async (businessId) => {
    return new Promise((resolve, reject) => {
        conn.query(
            "SELECT * FROM transactions WHERE business_id = ? ",
            [businessId],
            function (error, results, fields) {
                if (error) {
                    reject(error);
                }

                resolve(results);
            }
        );
    });
};

const create = async (businessId, customerId, data) => {
    return new Promise((resolve, reject) => {
        conn.query(
            "INSERT INTO transactions SET business_id = ?,  reference = ?, token = ?,recipient = ?, status = ?, currency = ?, channel = ?, fee = ?, amount = ?, start_time = ?, end_time = ?, customer_id = ?, created_at = ?",
            [
                businessId,
                new Date().getTime(),
                data.token,
                data.recipient,
                data.status,
                data.currency,
                data.channel,
                data.fee,
                data.amount,
                data.start_time,
                data.end_time,
                customerId,
                new Date(),
            ],
            function (error, results, fields) {
                if (error) {
                    reject(error);
                }

                resolve(results);
            }
        );
    });
};

const getTransactionById = async (transactionId) => {
    return new Promise((resolve, reject) => {
        conn.query(
            "SELECT * FROM transactions WHERE id = ?",
            [transactionId],
            function (error, results, fields) {
                if (error) {
                    reject(error);
                }

                resolve(results);
            }
        );
    });
};

module.exports = {
    list,
    create,
    getTransactionById,
};
