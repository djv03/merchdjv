
import Products from '../../../modals/Product';
import connectDB from '../../../middleware/mongoose';


 async function handler(req, res) {


  let allproducts = await Products.find();


  res.status(200).json({ allproducts })

}
export default connectDB(handler)


