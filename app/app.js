"use strict";  
//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home")

// 앱 세팅
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`))
// static : 정적 경로로 추가 // __dirname : 현재 파일이 있는 위치 반환
app.use("/", home);

module.exports = app; // app을 내보냄



     