import express from "express";
import { homePage, userLogout } from "../../../controllers/user/home/index.js";
import { isLoggedInUser } from "../../../middleware/authMiddleware.js";
import { LOGOUT, BASE_URL } from "../../../constans/enpoints.js";

const route = express.Router();

route.get(BASE_URL,isLoggedInUser,homePage)
route.get(LOGOUT,userLogout)

export default route