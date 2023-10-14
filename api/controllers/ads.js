const express = async (req, res) => {
    return res.json({
        status: "ok",
        ad: [
            {
                currency: "NGN",
                exchange_rate: 1045,
                channels: {
                    BANK: {
                        minimum_usd: 1,
                        maximum_usd: 10,
                        name: "Emmanuel Joseph",
                        bank: "GTBank",
                        account: "0126864523",
                        comment: "Do not include crypto in transfer comment",
                    },
                },
            },
            {
                currency: "AED",
                exchange_rate: 3.78,
                channels: {
                    BANK: {
                        minimum_usd: 1,
                        maximum_usd: 10,
                        name: "Emmanuel Joseph",
                        bank: "Mashreq Bank",
                        account: "9828328",
                        comment: "Do not include crypto in transfer comment",
                    },
                },
            },
            {
                currency: "USD",
                exchange_rate: 1,
                channels: {
                    WISE: {
                        minimum_usd: 1,
                        maximum_usd: 10,
                        email: "iemarjay@gmail.com",
                        name: "Emmanuel Joseph",
                        comment: "Do not include crypto in transfer comment",
                    },
                },
            },
        ],
    });
};

module.exports = {
    express,
};
