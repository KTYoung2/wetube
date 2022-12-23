import express from "express";
import { join } from "../controller/userController";
import { tranding } from "../controller/videoController";

const globalRouter = express.Router();
    //globalRouter는 url을 깔끔하게 정돈하는 정도지 그외의 이유는 없음.

//home
globalRouter.get("/", tranding);
//join
globalRouter.get("/join", join);



//js의 모든 파일은 분리된 모듈. 무언가를 다른파일에서 공유하기 위해서는 export를 먼저 해줘야함.
export default globalRouter;