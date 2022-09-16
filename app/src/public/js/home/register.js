"use strict";
//프론트에서 동작하는 JS 파일임(register ejs와 연결)

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

// console.log(id)
// ejs에서 값이 넘어오기 전에 console.log가 실행되어 Null이 반환됨 -> cript에 difer 적용    

registerBtn.addEventListener("click", register);
   
function register() {
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value,
    };
    // console.log(req); 
    // console.log(JSON.stringify(req));
    fetch("/register", {          //fetch로 전달
        method: "POST",
        headers: {
            "content-Type": "application/json" 
        },
        body: JSON.stringify(req),
    }).then((res) => res.json())  //Promise
      .then((res) => {     
        // 서버에서 응답한 데이터 받기
        if (res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
      })
      .catch((err) => {
        // console.error(new Error("회원가입 중 에러 발생"));
        console.error("회원가입 중 에러 발생");
      });      
    
        
};