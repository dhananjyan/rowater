import Enquiry from '../models/Enquiry';

const create = async (data) => {
    try {
        console.log("creating ")
        await Enquiry.create(data)
        return {
            status: true,
        }
    } catch (error) {
        console.log("creating ee", error)
        return {
            status: false,
            message: error?.message || error
        }
    }
}

export default {
    create
}