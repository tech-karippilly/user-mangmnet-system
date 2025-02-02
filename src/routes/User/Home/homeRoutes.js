import express from "express";
import { homePage, userLogout } from "../../../controllers/user/home/index.js";
import { isLoggedInUser } from "../../../middleware/authMiddleware.js";
import { USER_BASE, USER_LOGOUT } from "../../../constans/enpoints.js";

const route = express.Router();

route.get(USER_BASE,isLoggedInUser,homePage)
route.get(USER_LOGOUT,userLogout)

export default route