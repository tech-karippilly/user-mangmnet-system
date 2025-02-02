import express from "express";
import session from 'express-session'
import { fileURLToPath } from 'url';
import path from 'path';
import dontenv from 'dotenv'
dontenv.config()

import { ADMIN_REDIRECT, AUTH_BASE, AUTH_BASE_ADMIN, USER_REDIRECT } from "./constans/enpoints.js";

import adminRoute from './routes/adminRoute.js'
import userRoute from './routes/userRoute.js'
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
app.set('views', 'views')


app.use('/public', express.static('public'));

app.get('/',(req,res)=>{
    res.status(200).redirect(USER_REDIRECT)
})
app.get('/admin',(req,res)=>{
    res.status(200).redirect(ADMIN_REDIRECT)
})

app.use(AUTH_BASE,userRoute)
app.use(AUTH_BASE_ADMIN,adminRoute)

export default app