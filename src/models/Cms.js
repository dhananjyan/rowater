import mongoose from 'mongoose';

/* CmsSchema will correspond to a collection in your MongoDB database. */
const CmsSchema = new mongoose.Schema({
    cms: [
        {
            title: String,
            content: String,
            faq: [{
                question: String,
                answer: String
            }],
            image: String,
            type: {
                type: String,
                enum: ["content", "faq", "image"]
            },
            isEnabled: Boolean
        }
    ]
});

export default mongoose.models.Cms || mongoose.model('Cms', CmsSchema)