require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { auth, migration, business, ads } = require("./controllers");
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
    credentials: true,
    origin: process.env.FRONTEND_URL,
    // optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
    res.header("Access-Control-Allow-Headers", process.env.FRONTEND_URL);
    next();
});

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
app.get("/api/v1/account/logout", verifyToken, (req, res) => {
    return res
        .clearCookie("Authorization")
        .status(200)
        .json({ message: "Logged out" });
});

app.post("/api/v1/account/update", verifyToken, auth.update);
app.post("/api/v1/business/update", verifyToken, business.update);
app.get("/api/v1/business/owner", verifyToken, business.owner);
app.post("/api/v1/business/:ref/transaction/new", business.transactionNew);
app.get("/api/v1/business/:ref/transaction/all", business.transactionList);

app.get("/api/v1/ads/express", ads.express);

app.get(
    "/api/v1/business/:ref/transaction/:transactionId/approve",
    business.transactionApprove
);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
