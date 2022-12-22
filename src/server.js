//server 설정하기 express application

import express from "express";
//import -> node_module에서express 불러와 함수설정
import morgan from "morgan";
// morgan -> node.js용 request logger middleware 

//express function을 사용하면 알아서 application생성됨
const app = express();
const logger = morgan("dev"); 

         //1. reques object, 2. response object
const handleHome = (req, res) => {
   return res.send("I love middlewares");
   //응답함수
};



app.use(logger);
// application(sever)설정 -> request 요청하기 
app.get("/", handleHome);


               
const handleListening = () => console.log("Server Listening on port 4000~~");

/* server는 사용자가 요청할때까지 기다리게 해야함. 
/ 준비가 되면 application은 listen하기 시작하고 외부에 개방 */
app.listen(4000, handleListening) //server에게 어떤 port를 listening할지 설정 

