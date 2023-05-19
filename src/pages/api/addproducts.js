import Product from "../../../modals/Product";
import connectDB from "../../../middleware/mongoose";

async function handler(req, res) {
    if (req.method == 'POST') {

        for (let i = 0; i < req.body.length; i++) {
            let p = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                img: req.body[i].img,
                category: req.body[i].category,
                size: req.body[i].size,
                color: req.body[i].color,
                price: req.body[i].price,
                availableQty: req.body[i].availbaleQty,
            })
            await p.save()
            //this is the fukcin line that saves all the data that has been passes thorough the POST request
            // and this POST request is made by thunderclient 
            //now this is the hectic of mongoose.js that what is connectDB function do(go to that file)
        }


        res.status(200).json({ sucess: "added sucessfully in djvmerchF>products" })
    }
    else {
        res.status(400).json({ error: "this method is not allowed" })
    }

}

export default connectDB(handler)