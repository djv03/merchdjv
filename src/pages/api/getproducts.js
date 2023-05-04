const mongoose = require('mongoose');

const merchdjv_productSchenma = new mongoose.Schema({

  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  category: { type: String, required: true },
  size: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: String, required: true },
  availbaleQty: { type: Number, required: true },

}, { timestamps: true });
mongoose.models = {}

export default async function handler(req, res) {

  await mongoose.connect('mongodb+srv://20it88:Dhruvin%40123@cluster0.vidlpb4.mongodb.net/test');

  mongoose.model('product', merchdjv_productSchenma);
  let allproducts = await mongoose.model('product').find({ });


  res.status(200).json({ allproducts })

}


