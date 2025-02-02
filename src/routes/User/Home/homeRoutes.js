import express from "express";
import { homePage, userLogout } from "../../../controllers/user/home/index.js";
import { isLoggedInUser } from "../../../middleware/authMiddleware.js";
import { LOGOUT, USER_BASE } from "../../../constans/enpoints.js";

const route = express.Router();

route.get(USER_BASE,isLoggedInUser,homePage)
route.get(LOGOUT,userLogout)

export default route