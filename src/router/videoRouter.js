import express from "express";
//js파일들은 하나의 모듈, 독립되어 있음 그러니 한 파일 안에서도 돌아가는 환경을 또 만들어줘야함.
import { watch, edit } from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get("/watch", watch);
videoRouter.get("/edit", edit);

export default videoRouter;