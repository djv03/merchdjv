import User from "../../../modals/User";
import connectDB from "../../../middleware/mongoose";

async function handler(req, res) {
    if (req.method == 'POST') {

        console.log(req.body);
        res.status(200).json({ sucess: "added sucessfully in djvmerchF>products" })
        let u= new User(req.body)
        await u.save()
    }
    else {
        res.status(400).json({ error: "this method is not allowed" })
    }

}

export default connectDB(handler)