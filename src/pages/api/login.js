import User from "../../../modals/User";
import connectDB from "../../../middleware/mongoose";
import CryptoJS from "crypto-js";
var jwt = require('jsonwebtoken');

async function handler(req, res) {
    if (req.method == 'POST') {

        // console.log(req.body);

        let user = await User.findOne({ "email": req.body.email })
        var bytes = CryptoJS.AES.decrypt(user.password, 'parita123');
        // console.log(bytes);
        var decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
        // console.log(decryptedPass);
        if (user) {
            if (req.body.email == user.email && req.body.password == decryptedPass) {

                var token = jwt.sign({  email: user.email, name: user.name }, 'merchdjv123',{expiresIn:'1d'});
                res.status(200).json({sucess: true,token})
            }
            else {
                res.status(200).json({ sucess: false, error: "invalid crendentials" })
            }
        }
        else {
            res.status(200).json({ sucess: false, error: "no user found for that email" })
        }
    }
    else {
        res.status(400).json({ error: "this method is not allowed" })
    }

}

export default connectDB(handler)