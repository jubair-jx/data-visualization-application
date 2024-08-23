import { Router } from 'express';
import { getSalesGrowthRate, getTotalSales } from './orders.controller';

const orderRouter = Router();

orderRouter.get('/', getTotalSales);
orderRouter.get('/sales-growth', getSalesGrowthRate);

export default orderRouter;
