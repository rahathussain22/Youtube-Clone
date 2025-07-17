import dotenv from "dotenv"
import mongoose from "mongoose";
import connectDb from "./db/connectDb.js";
dotenv.config({
    path: './env'
})

connectDb();