import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { getAllCustmoners } from './customer.services';

export const getCustomers = catchAsync(async (req, res) => {
  const result = await getAllCustmoners();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customers have been retrived successfully',
    data: result,
  });
});
