import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoModel = new mongoose.Schema({
   title: {
    type: String,
    required: true,
    index: true
   },
   videofile: {
    type: String,
    required: true,
   },
   thumbnail: {
    type: String,
    required: true,
    
   },
   description: {
    type: String,
    required: true,
   },
   duration: {
    type: number,
    required: true,
   },
   views: {
    type: number,
    default: 0
   },
   ispublished:{
    type: Boolean,
    required: true
   },
   owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    index: true
   }

}, {timestamps: true})

mongoose.plugin(mongooseAggregatePaginate)
export const Video= mongoose.model("Video", userModel)