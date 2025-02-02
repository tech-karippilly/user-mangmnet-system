import express from "express";
import { ADMIN_DASHBOARD, LOGOUT } from "../../../constans/enpoints.js";
import { isAdminLoggedIn } from "../../../middleware/authMiddleware.js";
import { adminLogout, dashboardPage } from "../../../controllers/admin/dashboard/index.js";


const route = express.Router();

route.get(ADMIN_DASHBOARD,isAdminLoggedIn,dashboardPage)
route.get(LOGOUT,adminLogout)


export default route