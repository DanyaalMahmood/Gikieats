import express from 'express';
import { checkUser } from '../middlewares/auth.middleware';
import { createOrder, getHistory, updateOrderStatus, getHistoryForUser } from '../controllers/orders.controller';
const orderRouter = express.Router();





orderRouter.post('/:vendorId', checkUser, createOrder)
orderRouter.post('/update/:orderId', checkUser, updateOrderStatus)
orderRouter.get('/history', checkUser, getHistory)
orderRouter.get('/history/:vendorId', checkUser, getHistoryForUser)

export default orderRouter;