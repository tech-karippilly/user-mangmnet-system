import express from "express";
import { homePage } from "../../../controllers/user/home/index.js";
import { isLoggedInUser } from "../../../middleware/authMiddleware.js";

const route = express.Router();

route.get('/',isLoggedInUser,homePage)

export default route