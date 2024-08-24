import { orderModel } from '../Orders/orders.model';
import { customerModel } from './customer.model';

export const getAllNewCustomer = async (query: Record<string, unknown>) => {
  const interval = query.interval || 'daily';
  let dateFormat;
  let groupBy;

  switch (interval) {
    case 'daily':
      dateFormat = '%Y-%m-%d';
      groupBy = {
        $dateToString: { format: dateFormat, date: { $toDate: '$created_at' } },
      };
      break;
    case 'monthly':
      dateFormat = '%Y-%m';
      groupBy = {
        $dateToString: { format: dateFormat, date: { $toDate: '$created_at' } },
      };
      break;
    case 'quarterly':
      groupBy = {
        $concat: [
          { $toString: { $year: { $toDate: '$created_at' } } },
          '-Q',
          {
            $toString: {
              $ceil: { $divide: [{ $month: { $toDate: '$created_at' } }, 3] },
            },
          },
        ],
      };
      break;
    case 'yearly':
      dateFormat = '%Y';
      groupBy = {
        $dateToString: { format: dateFormat, date: { $toDate: '$created_at' } },
      };
      break;
    default:
      return {
        message: 'Invalid interval specified',
      };
  }

  try {
    const result = await customerModel.aggregate([
      {
        $group: {
          _id: groupBy,
          newCustomers: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 }, // Sort by date in ascending order
      },
    ]);
    return result;
  } catch (err) {
    return { error: 'Failed to fetch new customers data' };
  }
};

export const GetRepeatCustomersFromDB = async (
  query: Record<string, unknown>,
) => {
  const interval = query.interval || 'quarterly';
  let dateFormat;
  let groupBy;

  switch (interval) {
    case 'daily':
      dateFormat = '%Y-%m-%d';
      groupBy = {
        $dateToString: { format: dateFormat, date: '$firstPurchaseDate' },
      };
      break;
    case 'monthly':
      dateFormat = '%Y-%m';
      groupBy = {
        $dateToString: { format: dateFormat, date: '$firstPurchaseDate' },
      };
      break;
    case 'quarterly':
      groupBy = {
        $concat: [
          { $toString: { $year: '$firstPurchaseDate' } },
          '-Q',
          {
            $toString: {
              $ceil: { $divide: [{ $month: '$firstPurchaseDate' }, 3] },
            },
          },
        ],
      };
      break;
    case 'yearly':
      dateFormat = '%Y';
      groupBy = {
        $dateToString: { format: dateFormat, date: '$firstPurchaseDate' },
      };
      break;
    default:
      return { message: 'Invalid interval specified' };
  }

  try {
    const result = await orderModel.aggregate([
      {
        $addFields: {
          created_at: {
            $cond: {
              if: { $isNumber: '$created_at' },
              then: '$created_at',
              else: { $dateFromString: { dateString: '$created_at' } },
            },
          },
        },
      },
      {
        $group: {
          _id: '$customer_id',
          totalPurchases: { $sum: 1 },
          firstPurchaseDate: { $min: '$created_at' },
        },
      },
      {
        $match: {
          totalPurchases: { $gt: 1 }, // Only customers with more than one purchase
        },
      },
      {
        $group: {
          _id: groupBy,
          repeatCustomers: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);

    return result;
  } catch (err) {
    throw new Error('Failed to fetch repeat customers data');
  }
};

export const GetGeographicalDistributionOfCustomer = async () => {
  const result = await customerModel.aggregate([
    {
      $group: {
        _id: '$default_address.city',
        customerCount: { $sum: 1 },
      },
    },
    {
      $sort: { customerCount: -1 },
    },
  ]);
  return result;
};

export const GetAllGetClvCohorts = async () => {
  try {
    const cohorts = await customerModel.aggregate([
      {
        $lookup: {
          from: 'shopifyOrders',
          let: { customerId: '$_id' }, // Use `_id` from customerModel
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$customer.id', { $toLong: '$$customerId' }], // Convert `_id` to long for comparison
                },
              },
            },
            {
              $project: {
                created_at: { $dateFromString: { dateString: '$created_at' } }, // Convert string to Date
                total_price_set: {
                  $toDouble: '$total_price_set.shop_money.amount',
                }, // Convert string to number
              },
            },
          ],
          as: 'orders',
        },
      },
      { $unwind: '$orders' },
      {
        $group: {
          _id: {
            cohortMonth: {
              $dateToString: { format: '%Y-%m', date: '$orders.created_at' },
            },
            customerId: '$_id',
          },
          totalValue: { $sum: '$orders.total_price_set' },
        },
      },
      {
        $group: {
          _id: '$_id.cohortMonth',
          totalValue: { $sum: '$totalValue' },
          totalCustomers: { $addToSet: '$_id.customerId' },
        },
      },
      {
        $project: {
          _id: 0,
          cohortMonth: '$_id',
          clv: { $divide: ['$totalValue', { $size: '$totalCustomers' }] },
        },
      },
      { $sort: { cohortMonth: 1 } },
    ]);

    return cohorts;
  } catch (err) {
    throw new Error('Failed to fetch CLV by cohorts data');
  }
};
