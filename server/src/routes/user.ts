import express from 'express';

import { userSignup, userSignin, userCheck, userSignOut } from '../controllers/user.controller';

const userRouter = express.Router();



userRouter.post('/', userSignup);
userRouter.post('/signin', userSignin);
userRouter.get('/', userCheck);
userRouter.get('/signout', userSignOut);

export default userRouter;