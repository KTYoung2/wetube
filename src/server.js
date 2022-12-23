//server 설정하기 express application

import express from "express";
//import -> node_module에서express 불러와 함수설정
import morgan from "morgan";
// morgan -> node.js용 request logger middleware 
import globalRouter from "./router/globalRouter";
import videoRouter from "./router/videoRouter";
import userRouter from "./router/userRouter";

//express function을 사용하면 알아서 application생성됨
const app = express();
const logger = morgan("dev"); 
app.use(logger);



app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);


const handleListening = () => console.log("Server Listening on port 4000~~");

/* server는 사용자가 요청할때까지 기다리게 해야함. 
/ 준비가 되면 application은 listen하기 시작하고 외부에 개방 */
app.listen(4000, handleListening) //server에게 어떤 port를 listening할지 설정 

