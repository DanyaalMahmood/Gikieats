import { Request, Response } from "express"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getVendors = async (req: Request, res: Response) => {
    try {
        const vendors = await prisma.vendor.findMany({
            select: {
                id: true,
                name: true,
            },
        });
        return res.status(200).json(vendors);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'An error occurred while getting the vendors.' });
    }
}

export { getVendors };
