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
    /*phone: {
        type: String,
        reuired : false,
        unique: true,
        sparse : true,
        default : null,
    },*/
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
    // createdOn:{
    //     type:Date,
    //     default:Date.now()
    // }
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