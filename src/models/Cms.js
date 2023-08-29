import mongoose from 'mongoose';

/* CmsSchema will correspond to a collection in your MongoDB database. */
const CmsSchema = new mongoose.Schema({
    cms: [
        {
            title: String,
            content: String,
            isEnabled: Boolean,
            list: [{
                title: String,
                description: String,
                image: String
            }],
            image: String,
            type: {
                type: String,
                enum: ["content", "faq", "image"]
            }
        }
    ]
});

export default mongoose.models.Cms || mongoose.model('Cms', CmsSchema)