import express from 'express';
import { checkUser } from '../middlewares/auth.middleware';
import { createOrder, getHistory, updateOrderStatus } from '../controllers/orders.controller';
const orderRouter = express.Router();





orderRouter.post('/:vendorId', checkUser, createOrder)
orderRouter.post('/update/:orderId', checkUser, updateOrderStatus)
orderRouter.get('/history', checkUser, getHistory)

export default orderRouter;