const conn = require("../conn.js");

const createCustomer = async (businessId, data) => {
    return new Promise((resolve, reject) => {
        conn.query(
            "INSERT INTO customers SET name = ?, email = ?, business_id = ?, created_at = ?",
            [data.name, data.email, businessId, new Date()],
            function (error, results, fields) {
                if (error) {
                    reject(error);
                }

                resolve(results);
            }
        );
    });
};

const getCustomerByEmail = async (email) => {
    return new Promise((resolve, reject) => {
        conn.query(
            "SELECT * FROM customers WHERE email = ? ",
            [email],
            function (error, results, fields) {
                if (error) {
                    reject(error);
                }

                resolve(results);
            }
        );
    });
};

const list = async (businessId) => {
    return new Promise((resolve, reject) => {
        conn.query(
            "SELECT * FROM customers WHERE business_id = ? ",
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

module.exports = {
    createCustomer,
    getCustomerByEmail,
};
