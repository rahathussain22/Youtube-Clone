import { Router } from "express";
import { registeruser } from "../controllers/user.controller.js";
const userRouter = Router()
userRouter.route('/register').post(registeruser)

export default userRouter