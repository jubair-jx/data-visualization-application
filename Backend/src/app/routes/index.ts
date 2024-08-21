import { Router } from 'express';
import customerRouter from '../modules/Customers/customer.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/customers',
    route: customerRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
