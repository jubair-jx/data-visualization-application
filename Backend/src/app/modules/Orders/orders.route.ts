import { Router } from 'express';
import { getOrders } from './orders.controller';

const orderRouter = Router();

orderRouter.get('/', getOrders);

export default orderRouter;
