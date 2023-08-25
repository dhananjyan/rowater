import dbConnect from '../../lib/dbConnect'
import Enquiry from '../../models/Enquiry';

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const pets = await Enquiry.find({}) /* find all the data in our database */
                console.log('pets', pets)
                res.status(200).json({ success: true, data: pets })
            } catch (error) {
                res.status(400).json({ success: false, error })
            }
            break
        case 'POST':
            try {
                const pet = await Enquiry.create(
                    req.body
                ) /* create a new model in the database */
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