const mongoose = require('mongoose');

const merchdjv_productSchenma= new mongoose.Schema({
    
    title:{type:String, required:true},
    slug:{type:String, required:true, unique:true},
    desc:{type:String, required:true},
    img:{type:String, required:true},
    category:{type:String, required:true},
    size:{type:String, required:true},
    color:{type:String, required:true},
    price: {type:String, required:true},
    availbaleQty: {type:Number, required:true},
   
},{timestamps:true});

mongoose.models={}

// export default mongoose.model("product", merchdjv_productSchenma);
export default mongoose.models.Product || mongoose.model('Product', merchdjv_productSchenma)
