import { Request, Response } from "express"
import { PrismaClient, Prisma } from "@prisma/client"
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient()

const secret = process.env.SECRET;

const getUser = async (req: Request, res: Response) => {
    try {

        const token = req.cookies.jwt;

        if (token === null || typeof (secret) !== "string") {
            res.status(400);
            return res.json({ "error": "jwt error" });
        }

        let decode: any;

        jwt.verify(token, secret, async (err: any, decodedToken: any) => {
            if (err) {
                return res.json({ "error": "Not a valid json token" });
            } else {
                decode = jwt.decode(token);
            }
        });

        if (decode === undefined || decode.regno === undefined) return;
        const regno = decode.regno;

        return regno;
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: 'An error occured while signing in!' });
    }
};


interface OrderItem {
    id: String;
    order_id: String;
    item: String;
    quantity: String;
}

interface Order {
    id: String;
    assigned: String;
    status: String;
    userid: String;
    ordertime: String;
}

const createOrder = async (req: Request, res: Response) => {
    const body: { item: string, quantity: string }[] = req.body;

    try {
        const regno = await getUser(req, res);
        if (!regno) {
            return res.status(400).json({ error: 'Unauthorized' });
        }

        const orderItems: any[] = body;

        const test: any = orderItems.map((item: OrderItem) => ({
            item: item.item,
            quantity: item.quantity,
        }))

        const newOrder = await prisma.order.create({
            data: {
                status: 'in-queue',
                userid: regno,
                ordertime: String(new Date()),
                assigned: '22',
                orderitems: {
                    createMany: {
                        data: test,
                    },
                },
            },
        });

        return res.status(201).json({ data: newOrder });
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: 'An error occurred while creating the order.' });
    }
};


export { createOrder };
