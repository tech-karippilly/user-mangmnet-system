import express from "express";
import { homePage } from "../../../controllers/user/home/index.js";

const route = express.Router();

route.get('/',homePage)

export default route