import express from "express";
import { LOGIN, SIGNUP } from "../../../constans/enpoints.js";
import { loginPage, loginUser, signupPage, signupUser } from "../../../controllers/user/auth/index.js";
import { preventLoginPageUser } from "../../../middleware/authMiddleware.js";

const route = express.Router();

route.get(LOGIN,preventLoginPageUser,loginPage)
route.post(LOGIN,preventLoginPageUser,loginUser)

route.get(SIGNUP,signupPage)
route.post(SIGNUP,signupUser)



export default route