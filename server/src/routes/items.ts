import express from 'express';
import { findDesi } from '../controllers/items.controller';
import { findFastFood } from '../controllers/items.controller';
import { findOthers } from '../controllers/items.controller';
import { checkUser } from '../middlewares/auth.middleware';
import { findSpecificItem } from '../controllers/items.controller';
import { updateItem } from '../controllers/items.controller';
import { vendorItems } from '../controllers/items.controller';
const itemRouter = express.Router();



itemRouter.get('/desi/:id', checkUser, findDesi)
itemRouter.get('/fastfood/:id', checkUser, findFastFood)
itemRouter.get('/other/:id', checkUser, findOthers)
itemRouter.get('/:itemId', checkUser, findSpecificItem)
itemRouter.post('/:itemId', checkUser, updateItem)
itemRouter.get('/', checkUser, vendorItems)

export default itemRouter;