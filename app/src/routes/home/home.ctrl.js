"use strict";

const { render } = require("ejs");
const User = require("../../models/User");

const output = {
    hello : (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login")
    },
    register: (req, res) => {
        res.render("home/register");
    },
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        console.log(response);
        return res.json(response);
    },
    register: (req, res) => {
        
    }

};

module.exports = {
    output,
    process,
};