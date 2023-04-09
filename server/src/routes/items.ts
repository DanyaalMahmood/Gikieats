import express from 'express';
import { findDesi } from '../controllers/items.controller';
import { findFastFood } from '../controllers/items.controller';
import { findOthers } from '../controllers/items.controller';
const itemRouter = express.Router();



itemRouter.get('/desi', findDesi)
itemRouter.get('/fastfood', findFastFood)
itemRouter.get('/other', findOthers)

export default itemRouter;