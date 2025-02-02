import { AUTH_BASE, LOGIN } from "../../../constans/enpoints.js";
import { USER_LOGIN_PAGE, USER_SIGNUP_PAGE } from "../../../constans/pages.js"

import User from '../../../models/userSchema.js'


export async function loginPage(req, res) {
    res.status(200).render(USER_LOGIN_PAGE)
}

export async function loginUser(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user){
            return res.status(404).render(USER_LOGIN_PAGE, { message: 'User Not Found',redirectUrl:'' })
        }
        const passwordMatch = await user.comparePassword(password)
        if (!passwordMatch) {
            return res.status(400).render(USER_LOGIN_PAGE, { message: 'Invalid email or password' ,redirectUrl:''})
        }
        req.session.userId = user._id;
        if (req.session.userId){
            return res.status(200).render(USER_LOGIN_PAGE,{message: 'Login Successfully ',redirectUrl:'/'});
        }
        return res.status(400).render(USER_LOGIN_PAGE,{message: 'Login Faild Please try again later',redirectUrl:''});

    } catch (error) {
        return res.status(500).render(USER_LOGIN_PAGE,{message: 'Internal Server Error',redirectUrl:''});
    }
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
            isAdmin: false
        }

        const newUser = new User(userDetails)

        await newUser.save()
        return res.status(200).render(USER_SIGNUP_PAGE, { message: 'Your registration is successfull. Please login with your email and password', redirectUrl: AUTH_BASE + LOGIN })
    }
    catch (error) {
        res.status(500).render(USER_SIGNUP_PAGE, { message: "Internal Server Error", redirectUrl: '' })
    }
}