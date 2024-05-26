import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    address: {
        type: {},
    },
    answer: {
        type: String,
    },
    role: {
        type: Number,
        default: 0,
    },
},
    { timestamps: true }
)

export default mongoose.model('customers', customerSchema);