//server 설정하기 express application

import express from "express";
//import -> node_module에서 express 불러옴.

//express function을 사용하면 알아서 application생성됨
const app = express();

//middleware도 req,res, next가 필요함 -> next를 호출한다면 이 함수는 미들웨어임
const middleWare = (req, res, next) => {
   console.log(`${req.method} ${req.url}`);
   next();
};

const privateMiddleware = (req, res, next) => {
   const url = req.url;
   if(url === "/protected") {
      return res.send("<h1> Not Allowed </h1>")
   }
   next();
};

         //1. reques object, 2. response object
const handleHome = (req, res) => {
   return res.send("I love middlewares");
   //응답함수
};

const handleProtected = (res, req) => {
   return res.send("Welcome to private");
};


//전역 미들웨어를 만들 수 있게해줌(어느 url에도 작동하는)
app.use(middleWare);
app.use(privateMiddleware);

// application(sever)설정 -> request 요청하기 
app.get("/", handleHome);
app.get("/protected", handleProtected);



const handleListening = () => console.log("Server Listening on port 4000~~");

/* server는 사용자가 요청할때까지 기다리게 해야함. 
/ 준비가 되면 application은 listen하기 시작하고 외부에 개방 */
app.listen(4000, handleListening) //server에게 어떤 port를 listening할지 설정 

