import { customerModel } from './customer.model';

export const getAllCustmoners = async () => {
  const customers = await customerModel.find({});
  return customers;
};
