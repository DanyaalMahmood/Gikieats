import express from 'express';

import { userSignup, userSignin } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    console.log('shoes router working');
    res.send('<h1>hello<h1>');
});


userRouter.post('/', userSignup);
userRouter.post('/signin', userSignin);

export default userRouter;