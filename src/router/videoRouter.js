import express from "express";
//js파일들은 하나의 모듈, 독립되어 있음 그러니 한 파일 안에서도 돌아가는 환경을 또 만들어줘야함.
import { watch, getEdit, postEdit, deleteVideo, upload } from "../controller/videoController";   
        // ../ -> 지금 있는 폴더에서 벗어나는 걸 의미  ./ -> 지금의 장소

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
                    //숫자만 들어갈 수 있게 설정
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/upload", upload);

export default videoRouter;
/** export default
*  -> 하나의 변수만 공유하고 싶을 땐 default 
 * 
 */