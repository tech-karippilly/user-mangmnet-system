import { USER_HOME_PAGE } from "../../../constans/pages.js";
import User from "../../../models/userSchema.js";

export async function homePage (req,res){
    try{
      const userId = req.session.userId
      const getUserDetails = await User.findById(userId)
     return   res.status(200).render(USER_HOME_PAGE,{user:getUserDetails})
    }catch(error){
      return  res.status(500).render(USER_HOME_PAGE,{user:{}})
    }
}