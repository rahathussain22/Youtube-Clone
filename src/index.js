import dotenv from "dotenv"

import connectDb from "./db/connectDb.js";
dotenv.config({
    path: './env'
})

connectDb()
.then(()=>{
    try {
        app.listen(()=>{
            console.log(`Server is Running at Port: ${process.env.PORT}`)
        })
        app.on("error",(error)=>{
            console.log("Error", error)
            throw error
        })
    } catch (error) {
        console.log("error: ", error)
        throw error
    }

})
.catch((error)=>{
    console.log("error: ", error)
});
