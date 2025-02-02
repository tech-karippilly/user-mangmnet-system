import User from "../models/userSchema.js"

export const isLoggedInUser = async (req, res, next) => {
    try {
        const userId = req.session.userId
        if (userId) {
            const user = await User.findById(userId)
            const redirectURl = user.isAdmin? '/admin/dashboard' : '/'
            return next()
        }
        return res.status(401).redirect('/auth')
    } catch (error) {
        return res.status(401).redirect('/auth')
    }
}

export const preventLoginPageUser = async (req, res, next) => {
    try {
        const userId = req.session.userId
        if (userId) {
            const user = await User.findById(userId)
            const redirectURl = user.isAdmin? '/admin/dashboard' : '/'
            return res.status(200).redirect(redirectURl)
        }
        return next()
    } catch (error) {
        return next()
    }
}

export const isAdminLoggedIn = async(req,res,next)=>{

    try{
        const userId = req.session.admin.userId
        if (userId) {
            const user = await User.findById(userId)
            const redirectURl = user.isAdmin? '/admin/dashboard' : '/'
            return next()
        }
        return res.status(401).redirect('/admin')
    }catch(error){
        return res.status(401).redirect('/admin')
    }
}

export const preventAdminLoginPage = async (req,res,next) =>{
    try {
        const userId = req.session.admin.userId
        if (userId) {
            const user = await User.findById(userId)
            const redirectURl = user.isAdmin? '/admin/dashboard' : '/'
            return res.status(200).redirect(redirectURl)
        }
        return next()
    } catch (error) {
        return next()
    }
}