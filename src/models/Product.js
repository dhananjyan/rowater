import mongoose, { Schema } from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name: String,
    meta: {
        title: String,
        description: String
    },
    image: [String],
    description: Number,
    cms: {
        type: Schema.Types.ObjectId,
        ref: "cms"
    },
    isEnabled: Boolean,
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)