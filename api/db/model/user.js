const conn = require("../conn.js");

const getUserByUsername = async (email) => {
    return new Promise((resolve, reject) => {
        conn.query(
            "SELECT * FROM users WHERE email = ? ",
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

const updateUserByEmail = async (email, data) => {
    return new Promise((resolve, reject) => {
        conn.query(
            "UPDATE users SET firstname = ?, lastname = ?, phone = ?, country_iso2_code = ? WHERE email = ?",
            [
                data.firstname,
                data.lastname,
                data.phone,
                data.country_iso2_code,
                email,
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

module.exports = {
    getUserByUsername,
    updateUserByEmail,
};
