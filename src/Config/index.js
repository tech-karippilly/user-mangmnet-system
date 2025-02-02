import mongoose from "mongoose";
import dontenv from 'dotenv'
dontenv.config()

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('DB connected');
        
    } catch (error) {
        console.log('DB conncetion Error: ', error.message);
    }
}

export default connectDB