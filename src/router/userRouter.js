import express from "express";
import { edit,remove,logout,see } from "../controller/userController";

const userRouter = express.Router();


userRouter.get("/logout",logout);
userRouter.get("/edit",edit);
userRouter.get("/remove",remove);
userRouter.get("/:id(\\d+)",see);

export default userRouter;

/** export default
*  -> 하나의 변수만 공유하고 싶을 땐 default 
 * 
 */