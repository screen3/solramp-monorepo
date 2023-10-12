require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { auth } = require("./controllers");
const app = express();
const port = process.env.PORT || 3000;

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

app.post("/api/v1/business/new", auth.register);
app.post("/api/v1/account/login", auth.login);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
