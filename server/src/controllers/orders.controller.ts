import { Request, Response } from "express"
import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient()

interface OrderItem {
    productId: number;
    quantity: number;
    price: number;
}

interface Order {
    items: OrderItem[];
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    deliveryAddress: string;
    paymentMethod: string;
}

const createOrder = async (req: Request, res: Response) => {
    const { items, customerName, customerEmail, customerPhone, deliveryAddress, paymentMethod }: Order = req.body;

    try {
        const order = await prisma.order.create({
            data: {
                customerName,
                customerEmail,
                customerPhone,
                deliveryAddress,
                paymentMethod,
                items: {
                    create: items.map(item => {
                        return {
                            product: {
                                connect: {
                                    id: item.productId
                                }
                            },
                            quantity: item.quantity,
                            price: item.price
                        }
                    })
                }
            },
            include: {
                items: {
                    include: {
                        product: true
                    }
                }
            }
        });

        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Unable to create order" });
    }
};

export { createOrder };
