const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const usersCtrl = require("../app/controllers/users");

app.use(express.json());
app.set("views", __dirname + "/views");
app.set("view engine", "twig");
app.use(
    cors({
        origin: "*",
        methods: "GET,HEAD,OUT,PATCH,POST,DELETE,OPTIONS",
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credential: true,
        allowCrossDomain: true,
    })
);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../../frontend/build")));

app.use("/users", usersCtrl);

module.exports = app;