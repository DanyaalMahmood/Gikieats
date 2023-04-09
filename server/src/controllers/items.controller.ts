import { Request, Response } from "express"
import { PrismaClient, Prisma } from '@prisma/client'
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

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

    jwt.verify(token, secret, async (err: any, decodedToken: any) => {
      if (err) {
        res.json({ "error": "Not a valid json token" });
        return false;
      } else {
        decode = jwt.decode(token);
      }
    });

    if (decode === undefined || decode.regno === undefined) return;
    const phoneno = decode.phoneno;

    return phoneno;
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: 'An error occured while signing in!' });
  }
};

const findDesi = async (req: Request, res: Response) => {
  const vendorid = String(req.params.id);
  try {
    const desiItems = await prisma.item.findMany({
      where: {
        AND: [
          { category: 'desi' },
          { vendorid: vendorid },
          { availability: 'true' }
        ]
      }
    })
    res.status(200).json(desiItems)
  } catch (err) {
    res.status(400).json({ error: 'Something went wrong' })
  }
}



const findFastFood = async (req: Request, res: Response) => {
  const vendorid = String(req.params.id);
  try {
    const fastfoodItems = await prisma.item.findMany({
      where: {
        AND: [
          { category: 'fastfood' },
          { vendorid: vendorid },
          { availability: 'true' }
        ]
      }
    })
    res.status(200).json(fastfoodItems)
  } catch (err) {
    res.status(400).json({ error: 'Something went wrong' })
  }
}


const findOthers = async (req: Request, res: Response) => {
  const vendorid = String(req.params.id);
  try {
    const otherItems = await prisma.item.findMany({
      where: {
        AND: [
          { category: 'desi' },
          { vendorid: vendorid },
          { availability: 'true' }
        ]
      }
    })
    res.status(200).json(otherItems)
  } catch (err) {
    res.status(400).json({ error: 'Something went wrong' })
  }
}

const findSpecificItem = async (req: Request, res: Response) => {
  const itemId = String(req.params.itemId);

  try {
    const item = await prisma.item.findUnique({
      where: {
        id: itemId,
      },
    });

    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
}

const updateItem = async (req: Request, res: Response) => {
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
    const itemId = req.params.itemId;
    const { name, description, image, price, availability, category } = req.body;

    const existingItem = await prisma.item.findFirst({
      where: {
        id: itemId,
        vendorid: vendorId
      },
    });


    if (!existingItem) {
      return res.status(404).json({ error: 'Item not found or vendor not authorized' });
    }

    const updatedItem = await prisma.item.update({
      where: {
        id: itemId,
      },
      data: {
        name: name,
        description: description,
        image: image,
        price: parseInt(price),
        availability: availability,
        category: category
      }
    });

    res.status(200).json(updatedItem);

  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Something went wrong' });
  }
}

const vendorItems = async (req: Request, res: Response) => {

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

    const items = await prisma.item.findMany({
      where: {
        vendorid: vendorId
      }
    });

    res.status(200).json(items);

  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Something went wrong' });
  }
}


export { findDesi, findFastFood, findOthers, findSpecificItem, updateItem, vendorItems };