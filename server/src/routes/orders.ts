import express from 'express';
import { checkUser } from '../middlewares/auth.middleware';
import { createOrder } from '../controllers/orders.controller';
const orderRouter = express.Router();



orderRouter.post('/', checkUser, createOrder);


export default orderRouter;