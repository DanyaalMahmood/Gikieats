import express from 'express';

import { userSignup, userSignin, userCheck } from '../controllers/user.controller';

const userRouter = express.Router();



userRouter.post('/', userSignup);
userRouter.post('/signin', userSignin);
userRouter.get('/', userCheck);

export default userRouter;