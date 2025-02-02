import express from "express";
import { LOGIN, SIGNUP } from "../../../constans/enpoints.js";
import { adminLogin, adminLoginPage, adminSignupPage, adminSignupUser } from "../../../controllers/admin/auth/index.js"
import { preventAdminLoginPage } from "../../../middleware/authMiddleware.js";

const route = express.Router();


route.get(LOGIN,preventAdminLoginPage,adminLoginPage)
route.post(LOGIN,preventAdminLoginPage,adminLogin)

route.get(SIGNUP,preventAdminLoginPage,adminSignupPage)
route.post(SIGNUP,preventAdminLoginPage,adminSignupUser)

export default route