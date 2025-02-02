import express from "express";
import session from 'express-session'
import { fileURLToPath } from 'url';
import path from 'path';
import dontenv from 'dotenv'
dontenv.config()

import { ADMIN_BASE, ADMIN_REDIRECT, AUTH_BASE, AUTH_BASE_ADMIN, USER_BASE, USER_REDIRECT } from "./constans/enpoints.js";

import adminAuthRoute from './routes/Admin/Auth/adminAuthRoute.js'
import adminDashboardRoute from './routes/Admin/Dashboard/adminDashboardRoutes.js'
import userAuthRoute from './routes/User/Auth/userAuthRoute.js'
import userHomeRoute from './routes/User/Home/homeRoutes.js'


const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
        secure:false,
        maxAge:3600000
    }
}))

app.use(function (req, res, next) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.use(express.static(path.join(__dirname, 'public')));


app.get('/auth',(req,res)=>{
    res.status(200).redirect(USER_REDIRECT)
})
app.get('/admin',(req,res)=>{
    res.status(200).redirect(ADMIN_REDIRECT)
})

app.use(AUTH_BASE,userAuthRoute)
app.use(USER_BASE,userHomeRoute)

app.use(AUTH_BASE_ADMIN,adminAuthRoute)
app.use(ADMIN_BASE,adminDashboardRoute)


export default app