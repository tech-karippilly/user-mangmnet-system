export const checkSession =  (session,actionName)=>{
    const userId = session?.userId;
    const adminUserId = session?.admin?.userId;



    if (!userId && !adminUserId) {
        return { status: true, message: "No active session." };
    }


    if (userId && !adminUserId && actionName === "admin") {
        return { status: false, message: "User session already exists. Use another window or log out." };
    }

    if (adminUserId && !userId && actionName === "user") {
        return { status: false, message: "Admin session already exists. Use another window or log out." };
    }

    return { status: false, message: "Session already exists. Cannot log in with another account." };

}