import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {
  getAllNewCustomer,
  GetRepeatCustomersFromDB,
} from './customer.services';

export const newGetCustomers = catchAsync(async (req, res) => {
  const result = await getAllNewCustomer(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New customers have been retrived successfully',
    data: result,
  });
});
export const GetRepeatCustomers = catchAsync(async (req, res) => {
  const result = await GetRepeatCustomersFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Repeat customers have been retrived successfully',
    data: result,
  });
});
