import app from "./app.js";
import dotenv from 'dotenv'
import connectDB from "./Config/index.js";
dotenv.config()

const PORT  = process.env.PORT

connectDB()

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})