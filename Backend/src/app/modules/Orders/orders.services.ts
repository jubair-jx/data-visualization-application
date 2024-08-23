import { orderModel } from './orders.model';

export const getTotalSalesOverTime = async (query: Record<string, unknown>) => {
  const interval = query.interval || 'yearly';
  let dateFormat;
  let groupBy;

  switch (interval) {
    case 'daily':
      dateFormat = '%Y-%m-%d';
      groupBy = {
        $dateToString: { format: dateFormat, date: '$createdAtDate' },
      };
      break;
    case 'monthly':
      dateFormat = '%Y-%m';
      groupBy = {
        $dateToString: { format: dateFormat, date: '$createdAtDate' },
      };
      break;
    case 'quarterly':
      groupBy = {
        $concat: [
          { $toString: { $year: '$createdAtDate' } },
          '-Q',
          {
            $toString: {
              $ceil: { $divide: [{ $month: '$createdAtDate' }, 3] },
            },
          },
        ],
      };
      break;
    case 'yearly':
      dateFormat = '%Y';
      groupBy = {
        $dateToString: { format: dateFormat, date: '$createdAtDate' },
      };
      break;
    default:
      return { message: 'Invalid date format' };
  }

  try {
    const result = await orderModel.aggregate([
      {
        // Pre-aggregation step to convert `created_at` string to Date object
        $addFields: {
          createdAtDate: {
            $cond: {
              if: { $type: '$created_at' === ('string' as string) },
              then: { $dateFromString: { dateString: '$created_at' } },
              else: '$created_at', // If it's already a date, leave it as is
            },
          },
        },
      },
      {
        $group: {
          _id: groupBy,
          totalSales: {
            $sum: { $toDouble: '$total_price_set.shop_money.amount' },
          },
        },
      },
      {
        $sort: { _id: 1 }, // Sort by date
      },
    ]);

    return result;
  } catch (err: unknown) {
    throw new Error('Failed to aggregate sales data');
  }
};

export const getSalesGrowthRateOverTime = async (
  query: Record<string, unknown>,
) => {
  const interval = query.interval || 'monthly';

  let dateFormat;
  let groupBy;

  switch (interval) {
    case 'daily':
      dateFormat = '%Y-%m-%d';
      groupBy = {
        $dateToString: { format: dateFormat, date: '$createdAtDate' },
      };
      break;
    case 'monthly':
      dateFormat = '%Y-%m';
      groupBy = {
        $dateToString: { format: dateFormat, date: '$createdAtDate' },
      };
      break;
    case 'quarterly':
      groupBy = {
        $concat: [
          { $toString: { $year: '$createdAtDate' } },
          '-Q',
          {
            $toString: {
              $ceil: { $divide: [{ $month: '$createdAtDate' }, 3] },
            },
          },
        ],
      };
      break;
    case 'yearly':
      dateFormat = '%Y';
      groupBy = {
        $dateToString: { format: dateFormat, date: '$createdAtDate' },
      };
      break;
    default:
      return { message: 'Invalid date format' };
  }

  try {
    // Step 1: Aggregate total sales for each period
    const salesData = await orderModel.aggregate([
      {
        // Pre-aggregation step to convert `created_at` string to Date object
        $addFields: {
          createdAtDate: {
            $cond: {
              if: { $type: '$created_at' === ('string' as string) },
              then: { $dateFromString: { dateString: '$created_at' } },
              else: '$created_at', // If it's already a date, leave it as is
            },
          },
        },
      },
      {
        $group: {
          _id: groupBy,
          totalSales: {
            $sum: { $toDouble: '$total_price_set.shop_money.amount' },
          },
        },
      },
      {
        $sort: { _id: 1 }, // Sort by date
      },
    ]);

    // Step 2: Calculate the sales growth rate
    const salesGrowthRate = salesData.map((current, index) => {
      if (index === 0) {
        return { period: current._id, growthRate: null }; // No previous period to compare
      }
      const previous = salesData[index - 1];
      const growthRate =
        ((current.totalSales - previous.totalSales) / previous.totalSales) *
        100;
      return { period: current._id, growthRate };
    });

    return salesGrowthRate;
  } catch (err) {
    return {
      error: 'An error occurred while calculating the sales growth rate.',
    };
  }
};
