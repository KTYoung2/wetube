import express from "express";
//js파일들은 하나의 모듈, 독립되어 있음 그러니 한 파일 안에서도 돌아가는 환경을 또 만들어줘야함.
import { see, edit,deleteVideo, upload } from "../controller/videoController";   
        // ../ -> 지금 있는 폴더에서 벗어나는 걸 의미  ./ -> 지금의 장소

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see);
                    //숫자만 들어갈 수 있게 설정
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;