import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const uploadCloudaniry= async (localFilePath)=>{
try {
    if(!localFilePath) return null
  const response = await  cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto"
    })
    // by above code file is uploaded successfully
    console.log("file is uploaded on cloudinary", response.url)
    return response;
} catch (error) {
       fs.unlinkSync(localFilePath); // it will remove locally saved file as upload operation got failed
}
}

export {uploadCloudaniry}