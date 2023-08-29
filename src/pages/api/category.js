import dbConnect from '@/lib/dbConnect';
import CategoryService from '@/service/Category.service';

export default async function handler(req, res) {
    const { method } = req

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const data = await CategoryService.getParentDataWithChildren() /* find all the data in our database */
                res.status(200).json(data)
            } catch (error) {
                res.status(400).json({ status: false, message: error?.message || error })
            }
            break
        case 'POST':
            try {
                const data = await CategoryService.create(
                    req.body
                ) /* create a new model in the database */

                console.log(req.body, data)
                res.status(201).json(data)
            } catch (error) {
                res.status(400).json({ status: false, message: error?.message || error })
            }
            break
        case 'PATCH':
            try {
                const { _id, ...restData } = req?.body || {};
                const { status: isExist } = await CategoryService.findById(_id);
                if (!isExist)
                    return res.status(400).json({ status: false, message: "Bad request" })
                const data = await CategoryService.updateOne({ filter: { _id: req?.body?._id }, data: restData }) /* create a new model in the database */
                res.status(201).json(data)
            } catch (error) {
                res.status(400).json({ status: false, message: error?.message || error })
            }
            break
        default:
            res.status(404).json({ status: false })
            break
    }
}