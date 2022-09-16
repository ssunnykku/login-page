"use strict";

const UserStorage = require("../../models/UserStorage")

const output = {
    hello : (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login")
    },
};

const process = {
    login: (req, res) => {
        // console.log(req.body);  // body에 data가 저장되어있으니 접근..
        const id = req.body.id,
        psword = req.body.psword;
        //  console.log(id, psword);

        // const userStorage = new UserStorage(); 
        console.log(UserStorage.getUsers());
        
        const response = {};
        // if(users.id.includes(id)) {
        //     const idx = users.id.indexOf(id);
        // if (users.psword[idx] === psword) {
        //     response.success = true;
        //     return res.json(response);
        //     }
        // }
        response.success = false;
        return res.json({
            response, 
            msg : "로그인에 실패하셨습니다."});
    },
};

const { render } = require("ejs");

module.exports = {
    output,
    process,
};