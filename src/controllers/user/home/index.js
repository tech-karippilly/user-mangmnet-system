import { USER_HOME_PAGE } from "../../../constans/pages.js";

export function homePage (req,res){
    res.status(200).render(USER_HOME_PAGE)
}