const mongoose = require('mongoose');

const merchdjv_orderSchenma= new mongoose.Schema({
    
    UserId:{type:String, required:true},
    products:[
        {
            UserId:{type: String},
            products:[
                {
                    productID:{type:String},
                    quantity:{type:Number,default:1}
                }
            ],   
        }
    ],
    address:{type:String,required:true},
    total:{type:Number,required:true},
    status:{type:String,required:true, default:'pending'},
})
mongoose.models={}
export default mongoose.model('order',merchdjv_orderSchenma);