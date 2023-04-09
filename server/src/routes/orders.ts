import express from 'express';
import { checkUser } from '../middlewares/auth.middleware';
import { createOrder } from '../controllers/orders.controller';
const orderRouter = express.Router();



orderRouter.get('/desi', checkUser, createOrder)

export default orderRouter;