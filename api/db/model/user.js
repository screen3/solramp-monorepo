const conn = require("../conn.js");
const bcrypt = require("bcrypt");

const getUserByUsernamePassword = async (email, password) => {
    return new Promise((resolve, reject) => {
        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(password, saltRounds);

        console.log(email, hashedPassword);
        conn.query(
            "SELECT * FROM users WHERE email = ? ",
            [email],
            function (error, results, fields) {
                if (error) {
                    reject(error);
                }

                console.log(results);
                resolve(results);
            }
        );
    });
};

module.exports = {
    getUserByUsernamePassword,
};
