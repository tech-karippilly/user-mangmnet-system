import express from "express";
import { LOGIN, SIGNUP } from "../../../constans/enpoints.js";
import { loginPage, loginUser, signupPage, signupUser } from "../../../controllers/user/auth/index.js";

const route = express.Router();

route.get(LOGIN,loginPage)
route.post(LOGIN,loginUser)

route.get(SIGNUP,signupPage)
route.post(SIGNUP,signupUser)



export default route