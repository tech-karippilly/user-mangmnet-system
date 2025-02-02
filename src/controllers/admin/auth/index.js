import { ADMIN_LOGIN_PAGE } from "../../../constans/pages.js"
import User from "../../../models/userSchema.js";

export async function adminLoginPage(req,res){
    res.status(200).render(ADMIN_LOGIN_PAGE)
}

export async function adminLogin(req,res){
    try{
        const {email,password} = req.body;
        const admin = await User.findOne({email});

        if(!admin){
            return res.status(404).render(ADMIN_LOGIN_PAGE,{message:"Admin not found"})
        }
        if (!admin.isAdmin){
            return res.status(401).render(ADMIN_LOGIN_PAGE,{message:"You Don't have access to login"})
        }
         const passwordMatch = await admin.comparePassword(password)
         if (!passwordMatch){
            return res.status(400).render(ADMIN_LOGIN_PAGE,{message:"Incorrect Password"})
         }
         
         req.session.admin={
            userId:admin._id
         }

         if(req.session.admin.userId){
            return res.status(200).render(ADMIN_LOGIN_PAGE,{message:"Login Successfull"})
         }
         return res.status(500).render(ADMIN_LOGIN_PAGE,{message:"Session Error"})
         

    }catch(error){
        return res.status(500).render(ADMIN_LOGIN_PAGE,{message:"Internal Server Error"})
    }
}

export async function adminSignupPage(req,res){
    res.status(200).send('admin working')
}

export async function adminSignupUser(req,res){
    res.status(200).send('admin working')
}