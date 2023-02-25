const express = require("express");
const usersCtrl = express.Router();
const { User } = require("../models");

// findAll
usersCtrl.get("/", async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

// create
usersCtrl.get("/new", (req, res) => {
    res.render("user/create");
});

usersCtrl.post("/", async (req, res) => {
    const users = await User.create(req.body);
    res.redirect("/users");
});

usersCtrl.get("/:id", async (req, res) => {
    const user = await User.findByPk(req.params.id)
    res.json(user)
});

usersCtrl.post("/:id", async (req, res) => {
    res.send('Users#Update')
});

usersCtrl.delete("/", async (req, res) => {
    res.send('Users#Delete')
});

module.exports = usersCtrl;