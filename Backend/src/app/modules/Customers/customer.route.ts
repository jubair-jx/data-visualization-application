import { Router } from 'express';
import { GetRepeatCustomers, newGetCustomers } from './customer.controller';

const customerRouter = Router();

customerRouter.get('/new-customers', newGetCustomers);
customerRouter.get('/repeat-customers', GetRepeatCustomers);

export default customerRouter;
