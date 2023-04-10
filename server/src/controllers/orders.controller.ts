import { Request, Response } from "express"
import { PrismaClient, Prisma } from "@prisma/client"
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient()

const secret = process.env.SECRET;

const getVendor = async (req: Request, res: Response) => {
    try {

        const token = req.cookies.jwt;

        if (token === null || typeof (secret) !== "string") {
            res.status(400);
            res.json({ "error": "jwt error" });
            return false
        }

        let decode: any;

        await jwt.verify(token, secret, async (err: any, decodedToken: any) => {
            if (err) {
                res.json({ "error": "Not a valid json token" });
                return false;
            } else {
                decode = await jwt.decode(token);
            }
        });

        if (decode === undefined || decode.phoneno === undefined) {
            return;
        }
        const phoneno = decode.phoneno;


        return phoneno;
    } catch (err) {

        res.status(400).json({ error: 'An error occured while signing in!' });
    }
};

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
    const vendorId = req.params.vendorId;

    try {
        const regno = await getUser(req, res);
        if (!regno) {
            return res.status(400).json({ error: 'Unauthorized' });
        }

        const orderItems: any[] = body;

        const test: any = orderItems.map((item: OrderItem) => ({
            item: item.item,
            quantity: item.quantity.toString(),
        }))

        const newOrder = await prisma.order.create({
            data: {
                status: 'in-queue',
                userid: regno,
                ordertime: String(new Date()),
                assigned: '22',
                vendorid: vendorId,
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


const updateOrderStatus = async (req: Request, res: Response) => {
    try {
        const phoneno = await getVendor(req, res);
        const vendor = await prisma.vendor.findFirst({
            where: {
                phoneno: phoneno
            },
        });

        if (!vendor) {
            return res.status(404).json({ error: 'Vendor not found' });
        }

        const vendorId = vendor.id;
        const orderId = req.params.orderId;
        const { status } = req.body;

        const order = await prisma.order.findUnique({
            where: {
                id: orderId,
            },
            select: {
                vendorid: true,
            },
        });

        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        if (order.vendorid !== vendorId) {
            console.log(vendorId);
            return res.status(403).json({ error: 'You are not authorized to update this order' });
        }

        await prisma.order.update({
            where: {
                id: orderId,
            },
            data: {
                status: status,
            },
        });

        return res.json({ message: 'Order status updated successfully' });

    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Something went wrong' });
    }
}


const getHistory = async (req: Request, res: Response) => {
    try {
        const phoneno = await getVendor(req, res);
    
        if(phoneno === undefined) {
            return res.status(404).json({error: 'You are not a Vendor'});
        }

        const vendor = await prisma.vendor.findFirst({
            where: {
                phoneno: phoneno
            },
        });

        if (!vendor) {
            return res.status(404).json({ error: 'Vendor not found' });
        }

        const vendorId = vendor.id;
        const orders = await prisma.order.findMany({
            where: {
                vendorid: vendorId,
            },
            include: {
                orderitems: {
                    include: {
                        itemId_fk: true
                    }
                },
            }
        });

        return res.json(orders);

    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Something went wrong' });
    }
}


export { createOrder, updateOrderStatus, getHistory };
