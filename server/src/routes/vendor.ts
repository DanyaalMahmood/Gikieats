import express from 'express';
import { checkUser } from '../middlewares/auth.middleware';
import { getVendors } from '../controllers/vendors.controller';
const vendorRouter = express.Router();



vendorRouter.get('/', checkUser, getVendors)

export default vendorRouter;