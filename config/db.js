import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try {
        const conn= await mongoose.connect(process.env.MONGO_URL);
        console.log(`successfully connected to mongoDB ${conn.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log("erro in connecting to mongoDB".bgRed.white,error);
    }
}

export default connectDB;