const conn = require("../conn.js");
const bcrypt = require("bcrypt");

const getUserByUsernamePassword = async (email, password) => {
    return new Promise((resolve, reject) => {
        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(password, saltRounds);

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
    getUserByUsernamePassword,
    updateUserByEmail,
};
