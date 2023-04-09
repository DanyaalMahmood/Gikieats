import express from 'express';
import cors from 'cors';
import userRouter from './routes/user';
import itemRouter from './routes/items';
import orderRouter from './routes/orders';
import cookieParser from 'cookie-parser';
import vendorRouter from './routes/vendor';

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(cookieParser());
app.use(express.json());


app.use('/user', userRouter);
app.use('/items', itemRouter);
app.use('/order', orderRouter)
app.use('/vendor', vendorRouter)



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

