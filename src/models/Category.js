import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

/* CategorySchema will correspond to a collection in your MongoDB database. */
const CategorySchema = new mongoose.Schema({
    name: String,
    slug: String,
    meta: {
        title: String,
        description: String
    },
    level: {
        type: Number,
        default: 1
    },
    cms: {
        type: Schema.Types.ObjectId,
        ref: "cms"
    },
    parentId: {
        type: Schema.Types.ObjectId,
        ref: "category"
    }
});

export default mongoose.models.Category || mongoose.model('Category', CategorySchema)