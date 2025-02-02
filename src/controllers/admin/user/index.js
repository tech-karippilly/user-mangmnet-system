import { ADMIN_USER_PAGE } from "../../../constans/pages.js"
import User from "../../../models/userSchema.js"


export const searchUser = async (req, res) => {
    try {
        const { searchString } = req.query;

        let page = 1
        const limit = 2;
        const skip = (page - 1) * limit

        const totalUsersCount = await User.countDocuments()
        const totalPages = (totalUsersCount / limit)

        const users = await User.find({
            isAdmin: false,
            $or: [
                { email: { $regex: searchString, $options: "i" } },
                { name: { $regex: searchString, $options: "i" } },
            ],
        }).skip(skip).limit(limit)

        return res.status(200).render(ADMIN_USER_PAGE, { data: users, totalPages, currentPage: page })
    } catch (error) {
        return res.status(500).render(ADMIN_USER_PAGE, { data: [], totalPages: 0, currentPage: 0 })
    }
}

export const userPage = async (req, res) => {
    try {
        let { page } = req.query

        page = parseInt(page) || 1
        const limit = 2
        const skip = (page - 1) * limit

        const totalUsersCount = await User.countDocuments()
        const users = await User.find({ isAdmin: false }).skip(skip).limit(limit)

        const totalPages = (totalUsersCount / limit)

        return res.status(200).render(ADMIN_USER_PAGE, { data: users, totalPages, currentPage: page })

    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}

export const createUserPage = async () => { }

export const createUser = async (req, res) => { }

export const blockUser = async (req, res) => { }

export const updateUserPage = async () => { }

export const updateUser = async () => { }

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        
        await User.deleteOne({ _id: id });

        res.redirect("/admin/users");
    } catch (error) {
        console.log(error.message);

        res.status(500).send("Internal Server Error");

    }
}
