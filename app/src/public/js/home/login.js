"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

// console.log(id)
// ejs에서 값이 넘어오기 전에 console.log가 실행되어 Null이 반환됨 -> difer 적용    

loginBtn.addEventListener("click", login);
   
function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };
    // console.log(req); 
    // console.log(JSON.stringify(req));
    fetch("/login", {          //fetch로 전달
        method: "POST",
        headers: {
            "content-Type": "application/json" 
        },
        body: JSON.stringify(req),
    }).then((res) => res.json())  //Promise
      .then((res) => {     
        //서버에서 응답한 데이터 받기
        if (res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
      })
      .catch((err) => {
        // console.error(new Error("로그인 중 에러 발생"));
        console.error("로그인 중 에러 발생");
      });      
    
        
};