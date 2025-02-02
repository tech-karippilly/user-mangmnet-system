import express from "express";
import { LOGIN, SIGNUP } from "../constans/enpoints.js";
import { adminLogin, adminLoginPage, adminSignupPage, adminSignupUser } from "../controllers/admin/auth/index.js";

const route = express.Router();


route.get(LOGIN,adminLoginPage)
route.post(LOGIN,adminLogin)

route.get(SIGNUP,adminSignupPage)
route.post(SIGNUP,adminSignupUser)

export default route