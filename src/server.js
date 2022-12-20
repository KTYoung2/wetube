//server 설정하기 express application

import express from "express";
//import -> express 불러와 함수설정

//express function을 사용하면 알아서 application생성됨
const app = express();

         //1. reques object, 2. response object
const handleHome = (req, res) => {
   return res.send("I love you");
   //응답함수
};

const handleLogin = (req, res) => {
   return res.send("Login here~")
};

// application(sever)설정 -> request 요청하기 
app.get("/", handleHome);
app.get("/login", handleLogin);


const handleListening = () => console.log("Server Listening on port 4000~~");

/* server는 사용자가 요청할때까지 기다리게 해야함. 
/ 준비가 되면 application은 listen하기 시작하고 외부에 개방 */
app.listen(4000, handleListening) //server에게 어떤 port를 listening할지 설정 

