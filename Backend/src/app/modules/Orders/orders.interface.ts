type Money = {
  amount: number;
};

type TotalPriceSet = {
  shop_money: Money;
};

export type TOrder = {
  id: string;
  created_at: Date;
  total_price_set: TotalPriceSet;
  customer_id: string;
};
