import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {
  getSalesGrowthRateOverTime,
  getTotalSalesOverTime,
} from './orders.services';

export const getTotalSales = catchAsync(async (req, res) => {
  const result = await getTotalSalesOverTime(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Total sales have been retrived successfully',
    data: result,
  });
});
export const getSalesGrowthRate = catchAsync(async (req, res) => {
  const result = await getSalesGrowthRateOverTime(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Salses Growth have been retrived successfully',
    data: result,
  });
});
