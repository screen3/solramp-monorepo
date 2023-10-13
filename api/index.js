require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { auth, migration, business } = require("./controllers");
const app = express();
const port = process.env.PORT || 3000;
const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;

        jwt.verify(bearerToken, process.env.JWT_SECRET, (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                req.auth = authData;
                next();
            }
        });
    } else {
        res.sendStatus(403);
    }
};

const corsOptions = {
    origin: process.env.FRONT_URL,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.post("/api/v1/health", (req, res) => {
    res.json({
        status: "ok",
    });
});

app.post("/api/v1/migration", migration.run);
app.post("/api/v1/business/new", auth.register);
app.post("/api/v1/account/login", auth.login);

app.post("/api/v1/account/update", verifyToken, auth.update);
app.post("/api/v1/business/update", verifyToken, business.update);
app.get("/api/v1/business/owner", verifyToken, business.owner);
app.post("/api/v1/business/:ref/transaction/new", business.transactionNew);
app.get("/api/v1/business/:ref/transaction/all", business.transactionList);

app.get("/api/v1/ads/express", (req, res) => {
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
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
