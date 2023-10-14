const conn = require("../conn.js");

const createCustomer = async (data) => {
    return new Promise((resolve, reject) => {
        conn.query(
            "INSERT INTO customers SET name = ?, email = ?,  created_at = ?",
            [data.name, data.email, new Date()],
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

module.exports = {
    createCustomer,
    getCustomerByEmail,
};
