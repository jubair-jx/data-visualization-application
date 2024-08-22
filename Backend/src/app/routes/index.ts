import { Router } from 'express';
import customerRouter from '../modules/Customers/customer.route';
import orderRouter from '../modules/Orders/orders.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/customers',
    route: customerRouter,
  },
  {
    path: '/orders',
    route: orderRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
