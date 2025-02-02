import { AUTH_BASE, LOGIN } from "../../../constans/enpoints.js";
import { USER_LOGIN_PAGE, USER_SIGNUP_PAGE } from "../../../constans/pages.js"

import User from '../../../models/userSchema.js'


export async function loginPage(req, res) {
    res.status(200).render(USER_LOGIN_PAGE)
}

export async function loginUser(req, res) {
    res.status(200).send('working')

}

export async function signupPage(req, res) {
    res.status(200).render(USER_SIGNUP_PAGE, { message: "", redirectUrl: '' })
}

export async function signupUser(req, res) {
    try {
        const { fullName, email, password, confirmPassword } = req.body;

        const findUser = await User.findOne({ email: email });

        if (findUser) {
            return res.status(409).render(USER_SIGNUP_PAGE, { message: "A User with this email already exists", redirectUrl: '' })
        }
        
        if (password !== confirmPassword) {
            return res.status(400).render(USER_SIGNUP_PAGE, { message: "Password do not match", redirectUrl: '' })
        }
        const userDetails = {
            name: fullName,
            email: email,
            password,
            isAdmin: true
        }

        const newUser = new User(userDetails)

        await newUser.save()
        return res.status(200).render(USER_SIGNUP_PAGE, { message: 'Your registration is successfull. Please login with your email and password', redirectUrl: AUTH_BASE+LOGIN })
    }
    catch (error) {
        res.status(500).render(USER_SIGNUP_PAGE, { message: "Internal Server Error", redirectUrl: '' })
    }
}