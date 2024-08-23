import { Router } from 'express';
import {
  GetGeographicalDistribution,
  GetRepeatCustomers,
  newGetCustomers,
} from './customer.controller';

const customerRouter = Router();

customerRouter.get('/new-customers', newGetCustomers);
customerRouter.get('/repeat-customers', GetRepeatCustomers);
customerRouter.get('/geographical-distribution', GetGeographicalDistribution);

export default customerRouter;
