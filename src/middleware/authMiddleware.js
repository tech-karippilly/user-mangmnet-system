
export const isLoggedInUser = async (req, res, next) => {
    try {
        const userId = req.session.userId
        if (userId) {
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
            return res.status(200).redirect('/')
        }
        return next()
    } catch (error) {
        return next()
    }
}