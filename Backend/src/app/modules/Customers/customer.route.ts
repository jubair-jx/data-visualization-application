import { Router } from 'express';
import { getCustomers } from './customer.controller';

const customerRouter = Router();

customerRouter.get('/', getCustomers);

export default customerRouter;
