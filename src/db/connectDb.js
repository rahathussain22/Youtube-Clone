import mongoose from "mongoose"
import {DB} from "../constants.js"

const connectDb = async ()=>{
    try {
      const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB}`)
      console.log(`\n Mongo Db Connected with host: ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("Error", error)
        process.exit(1)
    }
}
export default connectDb;