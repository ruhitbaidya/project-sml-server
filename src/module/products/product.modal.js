import {Schema, model} from "mongoose"


const productSchema = new Schema({
  name: {
    type: String,
    required: true, 
    trim: true, 
  },
  price: {
    type: Number,
    required: true, 
    min: 0, 
  },
  category: {
    type: String,
    required: true, 
    trim: true,
  },
  tags: {
      type: String, 
      enum : [],
    default: [], 
  },
  description: {
    type: String,
    required: true, 
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  isDelete: {
    type: Boolean,
    default: false, 
  },
});


export const productModel = model('products', productSchema);

