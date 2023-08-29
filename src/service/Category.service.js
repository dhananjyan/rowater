import Category from '../models/Category';

const create = async (data) => {
    try {
        const results = await Category.create(data)
        return {
            status: true,
            results
        }
    } catch (error) {
        return {
            status: false,
            message: error?.message || error
        }
    }
}

const find = async (filter) => {
    try {
        const results = await Category.find(filter)
        return {
            status: true,
            results
        }
    } catch (error) {
        return {
            status: false,
            message: error?.message || error
        }
    }
}

const findById = async (_id) => {
    try {
        const results = await Category.findById(_id)
        return {
            status: !!results,
            results: results
        }
    } catch (error) {
        return {
            status: false,
            message: error?.message || error
        }
    }
}

const updateOne = async ({ filter = {}, data = {} }) => {
    try {
        const results = await Category.updateOne(filter, {
            $set: data
        });
        return {
            status: results?.acknowledged && results?.modifiedCount,
            results
        }
    } catch (error) {
        return {
            status: false,
            message: error?.message || error
        }
    }
}

const getParentDataWithChildren = async () => {
    try {

        const results = await Category.aggregate([
            {
                $match: { parentId: null } // Fetch only parent categories
            },
            {
                $lookup: {
                    from: 'categories', // The collection name
                    localField: '_id',
                    foreignField: 'parentId',
                    as: 'children'
                }
            }
        ]);
        return {
            status: true,
            results
        }
    } catch (error) {
        return {
            status: false,
            message: error?.message || error
        }
    }
}

export default {
    create,
    find,
    getParentDataWithChildren,
    findById,
    updateOne
}