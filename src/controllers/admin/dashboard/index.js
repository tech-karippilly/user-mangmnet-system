import { ADMIN_DASHBOARD } from "../../../constans/pages.js";

export function dashboardPage(req,res){
    res.status(200).render(ADMIN_DASHBOARD)
}

export function adminLogout(req,res){
    try {
        req.session.destroy((err) => {
          if (err) {
            return res.status(500).send("Error signing out. Please try again.");
          }
        });
        res.redirect("/admin");
      } catch (error) {
        if(!res.headersSent){
          res.status(500).send('Internal Server Error');
        }
      }
}