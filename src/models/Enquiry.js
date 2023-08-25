import mongoose from 'mongoose'

/* EnquirySchema will correspond to a collection in your MongoDB database. */
const EnquirySchema = new mongoose.Schema({
    name: String,
    email: String,
    mobileNumber: Number,
    message: String,
    product: String
});

export default mongoose.models.Enquiry || mongoose.model('Enquiry', EnquirySchema)