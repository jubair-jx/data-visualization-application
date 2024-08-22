import { model, Schema } from 'mongoose';
import { TOrder } from './orders.interface';

const orderSchema = new Schema<TOrder>({
  id: String,
  created_at: Date,
  total_price_set: {
    shop_money: {
      amount: Number,
    },
  },
  customer_id: String,
});

export const orderModel = model<TOrder>('shopifyOrders', orderSchema);
