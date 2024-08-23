import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {
  GetAllGetClvCohorts,
  getAllNewCustomer,
  GetGeographicalDistributionOfCustomer,
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
export const GetGeographicalDistribution = catchAsync(async (req, res) => {
  const result = await GetGeographicalDistributionOfCustomer();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message:
      'Geographical distribution of customers have been retrived successfully',
    data: result,
  });
});
export const GetClvCohorts = catchAsync(async (req, res) => {
  const result = await GetAllGetClvCohorts();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Group Cohorts have been retrived successfully',
    data: result,
  });
});
