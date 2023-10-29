import mongoose from 'mongoose';

let isConnected = false; // track if db is connected

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("=> MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true;

        console.log("=> MongoDB connection established successfully");
    } catch (error) {
        console.log("=> Could not connect to MongoDB");
        console.log(error.message);
    }
}