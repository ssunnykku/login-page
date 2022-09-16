"use strict";  
//모듈
const express = require("express");
const bodyParser =  require("body-parser");
const app = express();

//라우팅
const home = require("./src/routes/home")

// 앱 세팅
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`))
// static : 정적 경로로 추가 // __dirname : 현재 파일이 있는 위치 반환
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식하지 않는 문제 해결

app.use("/", home);

module.exports = app; // app을 내보냄



     