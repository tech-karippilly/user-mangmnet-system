import express from "express";
import { BASE_URL, DYNAMIC_ID, SEARCH } from "../../../constans/enpoints.js";
import { deleteUser, searchUser, userPage } from "../../../controllers/admin/user/index.js";

const route = express.Router()

route.get(BASE_URL,userPage)
route.get(SEARCH,searchUser)
route.get(DYNAMIC_ID,deleteUser)

export default route