import express from 'express';

import { getVendors } from '../controllers/vendors.controller';
import { vendorSignin } from '../controllers/vendors.controller';
import { vendorCheck } from '../controllers/vendors.controller';
import { vendorSignup } from '../controllers/vendors.controller';

const vendorRouter = express.Router();



vendorRouter.post('/', vendorSignup);
vendorRouter.post('/signin', vendorSignin);
vendorRouter.get('/check', vendorCheck)
vendorRouter.get('/', getVendors)



export default vendorRouter;