import express from 'express';
import { findDesi } from '../controllers/items.controller';
import { findFastFood } from '../controllers/items.controller';
import { findOthers } from '../controllers/items.controller';
import { checkUser } from '../middlewares/auth.middleware';
const itemRouter = express.Router();



itemRouter.get('/desi',checkUser, findDesi)
itemRouter.get('/fastfood',checkUser, findFastFood)
itemRouter.get('/other',checkUser, findOthers)

export default itemRouter;