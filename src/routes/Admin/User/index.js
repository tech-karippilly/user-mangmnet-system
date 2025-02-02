import express from "express";
import { BASE_URL, SEARCH } from "../../../constans/enpoints.js";
import { searchUser, userPage } from "../../../controllers/admin/user/index.js";

const route = express.Router()

route.get(BASE_URL,userPage)
route.get(SEARCH,searchUser)

export default route