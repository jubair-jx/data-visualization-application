import { orderModel } from './orders.model';

export const GetOrderFromDB = async (query: Record<string, unknown>) => {
  const { interval } = query;
  // console.log(findall);
  const getAll = await orderModel.find();
  console.log(getAll);
  // try {
  //   let groupBy;
  //   if (interval === 'daily') {
  //     groupBy = { $dateToString: { format: '%Y-%m-%d', date: '$created_at' } };
  //   } else if (interval === 'monthly') {
  //     groupBy = { $dateToString: { format: '%Y-%m', date: '$created_at' } };
  //   } else if (interval === 'quarterly') {
  //     groupBy = {
  //       $concat: [
  //         { $toString: { $year: '$created_at' } },
  //         '-Q',
  //         { $toString: { $ceil: { $divide: [{ $month: '$created_at' }, 3] } } },
  //       ],
  //     };
  //   } else if (interval === 'yearly') {
  //     groupBy = { $year: '$created_at' };
  //   }
  //   const salesData = await orderModel.aggregate([
  //     {
  //       $group: {
  //         _id: groupBy,
  //         totalSales: { $sum: '$total_price_set.shop_money.amount' },
  //       },
  //     },
  //     { $sort: { _id: 1 } },
  //   ]);
  //   return salesData;
  // } catch (err) {
  //   console.log(err);
  // }
};
