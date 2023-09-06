import upload from '@/middleware/multer';
import dbConnect from '../../lib/dbConnect'


export default async function handler(req, res) {
    const { method } = req
    const imgUpload = upload.single("file")
    // const formData = await req.body;
    // console.log("ddddddddddddddddd", Object.entries(formData))
    // console.log("dfdafadsfads", formData.adsfadfa)
    await dbConnect();

    console.log("body", req?.body)

    switch (method) {
        case 'POST':
            try {
                const { base64Image, imageExtension } = req.body;
                // Decode base64 image
                const decodedImage = Buffer.from(base64Image, 'base64');

                // Save the image to the "public/upload" folder with dynamic extension
                const fs = require('fs');
                const path = require('path');

                const uploadFolderPath = path.join(process.cwd(), 'public/upload');
                const imageName = `image_${Date.now()}.${imageExtension}`;
                const imagePath = path.join(uploadFolderPath, imageName);

                fs.writeFileSync(imagePath, decodedImage);


                res.status(201).json({ success: true, data: pet })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}