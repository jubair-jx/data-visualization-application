import { Router } from 'express';
import { getSalesGrowthRate, getTotalSales } from './orders.controller';

const orderRouter = Router();

orderRouter.get('/total-sales', getTotalSales);
orderRouter.get('/sales-growth', getSalesGrowthRate);

export default orderRouter;
