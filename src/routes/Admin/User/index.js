import express from "express";
import { ADMIN_CREATE_USER, AMDIN_EDIT_USER, BASE_URL, DYNAMIC_ID, SEARCH } from "../../../constans/enpoints.js";
import { createUser, createUserPage, deleteUser, searchUser, updateUser, updateUserPage, userPage } from "../../../controllers/admin/user/index.js";

const route = express.Router()

route.get(ADMIN_CREATE_USER,createUserPage)

route.get(AMDIN_EDIT_USER,updateUserPage)

route.get(BASE_URL,userPage)

route.get(SEARCH,searchUser)

route.get(DYNAMIC_ID,deleteUser)

route.post(ADMIN_CREATE_USER,createUser)

route.post(AMDIN_EDIT_USER,updateUser)

export default route