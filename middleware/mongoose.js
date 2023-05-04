import mongoose from "mongoose";

const connectDB=(handler)=> async(req,res)=>{
    // console.log("form mongoose.js");
    // console.log( mongoose.connections[0]);
    
    if (mongoose.connections.length>0) {
        return handler(req,res)
    } 
    await mongoose.connect('mongodb+srv://20it88:Dhruvin%40123@cluster0.vidlpb4.mongodb.net/test')

    return handler(req,res)
}

export default connectDB;

// const connection={};

// const dbConnect= async ()=>{
//     if (connection.isConnected) {
        
//     }

//     try {
//         const db = await mongoose.connect(process.env.mongo_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false,
//             useCreateIndex: true,
//           });

//           connection.isConnected = db.connections[0].readyState;
//           console.log('Connected to MongoDB');
//     } catch (error) {
//         console.log('Error connecting to MongoDB:', error.message);
//     }
// }

// export default dbConnect;

