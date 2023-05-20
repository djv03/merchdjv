const mongoose = require('mongoose');

const merchdjv_userSchenma= new mongoose.Schema({
    
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
   
   
},{timestamps:true});

// mongoose.models={}

export default mongoose.models.Userdb || mongoose.model('Userdb',merchdjv_userSchenma);