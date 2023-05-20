import User from "../../../modals/User";
import connectDB from "../../../middleware/mongoose";
var CryptoJS = require('crypto-js')
async function handler(req, res) {
    if (req.method == 'POST') {

        // console.log(req.body);
        
        const { name, email } = req.body
        let u = new User({ name, email, password: CryptoJS.AES.encrypt(req.body.password, "parita123").toString() })
        await u.save()
        res.status(200).json({ sucess: "sucessfully created new user" })
    }
    else {
        res.status(400).json({ error: "this method is not allowed" })
    }

}

export default connectDB(handler)