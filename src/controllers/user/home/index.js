import { USER_HOME_PAGE } from "../../../constans/pages.js";

export function homePage (req,res){
    try{
     return   res.status(200).send('Home page working')
    }catch(error){
      return  res.status(500).send('Internal Server Error')
    }
    // res.status(200).render(USER_HOME_PAGE)
}