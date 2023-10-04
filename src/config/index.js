export default {
    gmail: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        email: process.env.REQUEST_EMAIL
    },
    db: {
        url: process.env.MONGODB_URI
    }
}