import upload from '@/middleware/multer';
import dbConnect from '../../lib/dbConnect'


export default async function handler(req, res) {
    const { method } = req
    const imgUpload = upload.single("file")
    // const formData = await req.body;
    // console.log("ddddddddddddddddd", Object.entries(formData))
    // console.log("dfdafadsfads", formData.adsfadfa)
    await dbConnect();

    switch (method) {
        // case 'GET':
        //     try {
        //         const pets = await Enquiry.find({}) /* find all the data in our database */
        //         console.log('pets', pets)
        //         res.status(200).json({ success: true, data: pets })
        //     } catch (error) {
        //         res.status(400).json({ success: false, error })
        //     }
        //     break
        case 'POST':
            try {
                // const file = formData.get(file);
                // console.log('file', file)

                let data = '';

                req.on('data', chunk => {
                    console.count("c")
                    data += chunk;
                });

                console.log(
                    "data data data",
                    data
                )

                req.on('end', () => {
                    const formData = new URLSearchParams(data);

                    // Access form data fields
                    const name = formData.get('adsfadfa');
                    // const age = formData.get('age');
                    console.log('Name:', name);
                    // console.log('Age:', age);

                    res.status(200).json({ message: 'Form data received and processed.' });
                });

                // req.file = file;
                imgUpload(req, res, function (err) {
                    if (err) {
                        console.log("error ddddddd", err)
                        // A Multer error occurred when uploading.
                    } else {
                        console.log(' not error')
                    }

                    // Everything went fine.
                })
                // const pet = await Enquiry.create(
                //     req.body
                // ) /* create a new model in the database */
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