import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

/* CategorySchema will correspond to a collection in your MongoDB database. */
const CategorySchema = new mongoose.Schema({
    name: String,
    slug: String,
    isEnabled: Boolean,
    meta: {
        title: String,
        description: String
    },
    level: {
        type: Number,
        default: 1
    },
    content: String,
    cms: {
        type: Schema.Types.ObjectId,
        ref: "cms"
    },
    parentId: {
        type: Schema.Types.ObjectId,
        ref: "categories"
    }
});

export default mongoose.models.Category || mongoose.model('Category', CategorySchema)