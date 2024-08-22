import { model, Schema } from 'mongoose';
import { TProduct } from './products.interface';

const productSchema = new Schema<TProduct>({
  id: String,
  title: String,
  vendor: String,
  created_at: Date,
  updated_at: Date,
  variants: [
    {
      id: String,
      title: String,
      price: Number,
    },
  ],
});

export const productModel = model<TProduct>('shopifyProducts', productSchema);
