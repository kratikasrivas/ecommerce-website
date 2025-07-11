const cloudinary= require('cloudinary').v2;
const multer=require('multer');

cloudinary.config({
    cloud_name :'dzmkc4sbl',
    api_key : '959441687685785',
    api_secret: 'h7yLxsWVNxcKbwZBMixp9tC3gCw',
});

const storage= new multer.memoryStorage();

async function imageUploadUtil(file) {
    const result=await cloudinary.uploader.upload(file,{
        resource_type:'auto'
    })

    return result;
}

const upload =multer({storage});

module.exports={upload , imageUploadUtil};