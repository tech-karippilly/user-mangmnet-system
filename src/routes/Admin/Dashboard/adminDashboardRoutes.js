import express from "express";
import { ADMIN_DASHBOARD } from "../../../constans/enpoints.js";


const route = express.Router();

route.get(ADMIN_DASHBOARD,(req,res)=>{
    res.send('dashboard loaded')
})

export default route