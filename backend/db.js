const mongoose = require('mongoose')
const mongoUrl = 'mongodb://localhost:27017/inotebook';

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoUrl); // no deprecated options needed
        console.log("Connected to MongoDB Successfully");
    } catch (err) {
        console.error("MongoDB connection failed:", err);
        process.exit(1);
    }
};
module.exports = connectToMongo;
