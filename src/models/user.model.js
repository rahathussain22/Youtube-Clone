import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true,"Password is required"],
        
    },
    fulname: {
        type: String,
        required: true,
        
    },
    avatar: {
        type: String,
        required: true,
        
    },
    coverImage: {
        type: String,
               
    },
    refreshToken: {
        type: String,
        
    },
    watchHistory: [{
      type: mongoose.Schema.Types.ObjectId,
        ref: 'Video',
        required: true,  
        
    }],
    
   
},{timestamps:true})
 userModel.plugin("save", async function (next){
    if(!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password, 10)
    next()
 })

 userSchema.methods.isPasswordCorrect = async function (password){

   return await bcrypt.compare(password, this.password)
 }
 userSchema.methods.generateAccessToken = function(){
    jwt.sign({
        _id: this._id,
        email: this.email,
        username:this.username,
        fullname: this.fullname

         
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: ACCESS_TOKEN_EXPIRY
    }
)
 }
 userSchema.methods.generateRefreshToken = function(){
      jwt.sign({
        _id: this._id,

         
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: REFRESH_TOKEN_EXPIRY
    }
)
 }

export const User= mongoose.model("User", userModel)