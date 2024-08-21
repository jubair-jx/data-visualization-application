import { model, Schema } from 'mongoose';

const customerSchema = new Schema({
  id: String,
  email: String,
  first_name: String,
  last_name: String,
  created_at: Date,
  default_address: {
    city: String,
    country: String,
  },
  orders_count: Number,
  total_spent: Number,
});

export const customerModel = model('shopifyCustomers', customerSchema);
