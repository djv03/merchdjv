import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
    console.log("from mongoose.js");
    console.log(mongoose.connections.length);

    if (mongoose.connections[0].readyState) {
        //if connection is already made then return handler 
        return handler(req, res)
    }
    await mongoose.connect('mongodb+srv://20it88:Dhruvin%40123@cluster0.vidlpb4.mongodb.net/djvmerchF')
        .then(() => { console.log('mongoDB database connected sucessfully from djvmerchF>products') })
        .catch((err) => { console.log(err) });

    return handler(req, res)
}

export default connectDB;
