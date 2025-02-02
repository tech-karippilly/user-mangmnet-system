import express from "express";
import session from 'express-session'
import { fileURLToPath } from 'url';
import path from 'path';

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

export default app