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
                availbaleQty: req.body[i].availbaleQty,
            })
            await p.save()
        }


        res.status(200).json({ sucess: "added sucessfully" })
    }
    else {
        res.status(400).json({ erro: "this method is not allowed" })
    }

}

export default connectDB(handler)