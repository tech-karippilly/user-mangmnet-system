import express from "express";
import { BASE_URL } from "../../../constans/enpoints.js";
import { userPage } from "../../../controllers/admin/user/index.js";

const route = express.Router()

route.get(BASE_URL,userPage)

export default route