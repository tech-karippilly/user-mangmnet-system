import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true,
        unique: true
    },
    googleId : {
        type:String,
        unique: false

    },
    password: {
        type:String,
        required:false
    },
    isBlocked:{
        type:Boolean,
        default: false
    },
    isAdmin:{
        type:Boolean,
        default: false
    },
},
{
    timestamps:true
})

userSchema.methods.comparePassword = async function (plainPassword) {
    return await bcrypt.compare(plainPassword, this.password);
  };

userSchema.methods.hashPassword = async function (plainPassword) {
    const saltRounds = 10;
    return await bcrypt.hash(plainPassword, saltRounds);
  };

  userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
      this.password = await this.hashPassword(this.password);
    }
    next();
  });

const User = mongoose.model("User", userSchema);
export default User