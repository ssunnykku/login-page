"use strict";

const output = {
    hello : (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login")
    },
};

const users = {
    id: ["ssunnykku", "ckamsi", "sun_hee"],
    psword: ["1234", "2351", "!234"],
};

const process = {
    login: (req, res) => {
        // console.log(req.body);  // body에 data가 저장되어있으니 접근..
        const id = req.body.id,
        psword = req.body.psword;
        //  console.log(id, psword);

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
        if (users.psword[idx] === psword)
            return res.json({ 
                success: true,  // 성공하면
            });
           
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
};

const { render } = require("ejs");

module.exports = {
    output,
    process,
};