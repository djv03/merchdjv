import User from "../../../modals/User";
import connectDB from "../../../middleware/mongoose";

async function handler(req, res) {
    if (req.method == 'POST') {

        console.log(req.body);
      
        let user= await User.findOne({"email":req.body.email,})
        if(user){
            if (req.body.email== user.email && req.body.password== user.password) {
                res.status(200).json({sucess:true,email:user.email,name:user.name})
            }

            else{
                res.status(200).json({sucess:false,error:"invalid crendentials"})

            }
        }
        else{
            res.status(200).json({sucess:false,error:"no user found for that email"})

        }
    }
    else {
        res.status(400).json({ error: "this method is not allowed" })
    }

}

export default connectDB(handler)