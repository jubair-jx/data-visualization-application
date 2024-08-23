import { Router } from 'express';
import {
  GetClvCohorts,
  GetGeographicalDistribution,
  GetRepeatCustomers,
  newGetCustomers,
} from './customer.controller';

const customerRouter = Router();

customerRouter.get('/new-customers', newGetCustomers);
customerRouter.get('/repeat-customers', GetRepeatCustomers);
customerRouter.get('/geographical-distribution', GetGeographicalDistribution);
customerRouter.get('/clv-cohorts', GetClvCohorts);

export default customerRouter;
