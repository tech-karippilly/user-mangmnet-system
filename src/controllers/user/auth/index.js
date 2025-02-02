import { USER_LOGIN_PAGE, USER_SIGNUP_PAGE } from "../../../constans/pages.js"

export async function loginPage(req,res){
    res.status(200).render(USER_LOGIN_PAGE)
}

export async function loginUser(req,res){
    res.status(200).send('working')
}

export async function signupPage(req,res){
    res.status(200).render(USER_SIGNUP_PAGE)
}

export async function signupUser(req,res){
    res.status(200).send('working')
}