import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { getTotalSalesOverTime } from './orders.services';

export const getOrders = catchAsync(async (req, res) => {
  const result = await getTotalSalesOverTime(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders have been retrived successfully',
    data: result,
  });
});
