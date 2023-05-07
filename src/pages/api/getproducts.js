
import Products from '../../../modals/Product';
import connectDB from '../../../middleware/mongoose';
import tshirts from '../tshirts'

 async function handler(req, res) {


  let allproducts = await Products.find();

    let alltshirts={}
  for (let item of allproducts) {
    if (item.title in alltshirts) {
      console.log('pushing into array array');
      console.log("type is:"+typeof(alltshirts[item.title].color) )
      if ( !alltshirts[item.title].color.includes(item.color) && item.availableQty>0) {
        alltshirts[item.title].color.push(item.color)
      }
      if ( !alltshirts[item.title].size.includes(item.size) && item.availableQty>0) {
        alltshirts[item.title].size.push(item.size)
      }
    } 
    else {
      alltshirts[item.title]=  JSON.parse(JSON.stringify(item))
      
      if (item.availableQty>0) {
        console.log('array is created');
        alltshirts[item.title].color=[item.color]
        alltshirts[item.title].size=[item.size]
      }
    }
  }

  res.status(200).json({ alltshirts  })

}
export default connectDB(handler)


