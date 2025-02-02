import express from "express";
import { ADMIN_DASHBOARD } from "../../../constans/enpoints.js";
import { isAdminLoggedIn } from "../../../middleware/authMiddleware.js";


const route = express.Router();

route.get(ADMIN_DASHBOARD,isAdminLoggedIn,(req,res)=>{
    res.send('dashboard loaded')
})

export default route