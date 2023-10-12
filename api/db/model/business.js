const conn = require("../conn.js");
const bcrypt = require("bcrypt");

const getBusinessByName = async (businessName) => {};

const create = async (business) => {
    let userId, businessId, hashedPassword;

    return new Promise((resolve, reject) => {
        bcrypt.hash(business.password, 10, function (err, hash) {
            if (err) reject(err);
            hashedPassword = hash;
        });

        // connection.beginTransaction(function (err) {
        //Save user info
        conn.query(
            "INSERT INTO users SET ?",
            {
                email: business.representative_email,
                firstname: business.representative_firstname,
                lastname: business.representative_lastname,
                phone: business.representative_phone,
                country_iso2_code: business.country_iso2_code,
                password: hashedPassword,
                country_iso2_code: business.country_iso2_code,
            },
            function (error, results, fields) {
                if (error) {
                    connection.rollback();
                    reject(error);
                }
                userId = results?.insertId;
            }
        );

        console.log(userId, reject(false));

        //Save company imnfo
        var ff = conn.query(
            "INSERT INTO businesses SET ?",
            {
                business_name: business.business_name,
                representative_id: userId,
                business_id: new Date().getTime(),
                default_currency: business.default_currency,
            },
            function (error, results, fields) {
                if (error) {
                    connection.rollback();
                    reject(error);
                }
                businessId = results?.insertId;
            }
        );

        conn.query(
            `UPDATE businesses SET representative_id = ?  WHERE id = ? `,
            [userId, businessId],
            function (error, results, fields) {
                if (error) {
                    connection.rollback();
                    reject(error);
                }
                resolve(true);
            }
        );

        conn.query(
            `UPDATE users SET company_id = ?  WHERE id = ? `,
            [businessId, userId],
            function (error, results, fields) {
                if (error) {
                    connection.rollback();
                    reject(error);
                }
                resolve(true);
            }
        );
        // });

        conn.end();
    });
};

module.exports = {
    create,
};
