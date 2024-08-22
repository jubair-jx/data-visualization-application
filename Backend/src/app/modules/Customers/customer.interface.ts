export type TCustomerInfo = {
  id?: string;
  email: string;
  first_name: string;
  last_name: string;
  created_at: Date;
  default_address: {
    city: string;
    country: string;
  };
  orders_count: number;
  total_spent: number;
};
