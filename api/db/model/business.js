const conn = require("../conn.js");
const bcrypt = require("bcrypt");
var slugify = require("slugify");

const getBusinessByName = async (businessName) => {
    return new Promise((resolve, reject) => {
        const slug = slugify(businessName, { lower: true });

        conn.query(
            "SELECT * FROM businesses WHERE business_slug = ?",
            [slug],
            function (error, results, fields) {
                if (error) {
                    reject(error);
                }

                resolve(results);
            }
        );
    });
};

const create = async (business) => {
    return new Promise((resolve, reject) => {
        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(business.password, saltRounds);

        conn.beginTransaction(function (err) {
            if (err) {
                throw err;
            }
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
                    created_at: new Date(),
                },
                function (error, results, fields) {
                    if (error) {
                        return conn.rollback(function () {
                            reject(error);
                        });
                    }
                    const userId = results?.insertId;

                    //Save company info
                    conn.query(
                        "INSERT INTO businesses SET ?",
                        {
                            business_name: business.business_name,
                            business_slug: slugify(business.business_name, {
                                lower: true,
                            }),
                            representative_id: userId,
                            business_ref: new Date().getTime(),
                            default_currency: business.default_currency,
                            created_at: new Date(),
                        },
                        function (error, results, fields) {
                            if (error) {
                                return conn.rollback(function () {
                                    reject(error);
                                });
                            }

                            const businessId = results?.insertId;

                            conn.query(
                                `UPDATE businesses SET representative_id = ?  WHERE id = ? `,
                                [userId, businessId],
                                function (error, results, fields) {
                                    if (error) {
                                        return conn.rollback(function () {
                                            reject(error);
                                        });
                                    }

                                    conn.query(
                                        `UPDATE users SET company_id = ?  WHERE id = ? `,
                                        [businessId, userId],
                                        function (error, results, fields) {
                                            if (error) {
                                                conn.rollback();
                                                reject(error);
                                            }
                                        }
                                    );
                                }
                            );

                            conn.commit(function (err) {
                                if (err) {
                                    return conn.rollback(function () {
                                        throw err;
                                    });
                                }

                                conn.end();
                                resolve(true);
                            });
                        }
                    );
                }
            );
        });
    });
};

module.exports = {
    create,
    getBusinessByName,
};
