import { Request, Response } from "express"

import { PrismaClient, Prisma } from '@prisma/client'
import jwt, { JwtPayload } from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient()

const secret = process.env.SECRET;

interface Vendor {
    name: string
    phoneno: string
    password: string
}

interface VendorBody {
    name: string
    phoneno: string
    password: string
}

const vendorSignup = async (req: Request, res: Response) => {
    const body: VendorBody = req.body;

    if (body.name === undefined ||
        body.password === undefined ||
        body.phoneno === undefined) {

        res.status(400);
        return res.json("error: Invalid Request Parameters");
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(body.password, salt);


    const vendor: Vendor = { name: body.name, password: hashedPassword, phoneno: body.phoneno };

    let createdVendor: Vendor;

    try {

        let vendors = await prisma.vendor.findMany({
            where: {
                phoneno: body.phoneno,
            },
        });

        if (vendors.length > 0) {
            res.status(400)
            return res.json({ error: 'Vendor with this phone number is already registered!' });
        }

        vendors = await prisma.vendor.findMany({
            where: {
                name: body.name,
            },
        });

        if (vendors.length > 0) {
            res.status(400)
            return res.json({ error: 'Vendor with this name already exists!' });
        }

        createdVendor = await prisma.vendor.create({
            data: vendor
        });


        if (typeof (secret) === "string") {

            const tokenbody = { name: createdVendor.name, phoneno: createdVendor.phoneno };
            const token = await jwt.sign(tokenbody, secret, {
                expiresIn: 3 * 24 * 60 * 60,
            });

            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: 3 * 24 * 60 * 60 * 1000,
            });
        }



        return res.json(createdVendor);

    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            console.log(error.message);
            return res.json(`error: ${error.message}`);
        } else {
            console.log(error);
            return res.json("error:prisma error occured");
        }
    }
}


const vendorSignin = async (req: Request, res: Response) => {
    const body: VendorBody = req.body;
    //console.log('signin', req.body);

    if (body.phoneno === undefined ||
        body.password === undefined) {

        res.status(400);
        return res.json("error: Invalid Request Parameters");
    }

    try {
        let vendors = await prisma.vendor.findMany({
            where: {
                phoneno: body.phoneno,
            },
        });

        //console.log('Vendors', vendors);

        if (vendors.length === 0) {
            return res.status(400).json({ error: 'No vendor with this phone number exists!' });
        }

        const checkPassword = await bcrypt.compare(body.password, vendors[0].password);

        if (checkPassword === false) {
            return res.status(400).json({ error: 'Incorrect Password' });
        }

        if (typeof (secret) === "string") {

            const tokenbody = { name: vendors[0].name, phoneno: vendors[0].phoneno };
            const token = await jwt.sign(tokenbody, secret, {
                expiresIn: 3 * 24 * 60 * 60,
            });

            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: 3 * 24 * 60 * 60 * 1000,
            });
        }

        res.json(vendors[0]);
    } catch (err) {
        res.status(400).json({ error: 'An error occured while signing in!' });
    }

}



const vendorCheck = async (req: Request, res: Response) => {
    //console.log('check');

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

        if (decode === undefined || decode.phoneno === undefined) return;
        const phoneno = decode.phoneno;


        //querying the data base for vendor on basis of the recieved number
        const vendor = await prisma.vendor.findFirst({
            where: {
                phoneno: phoneno,
            },
        });

        res.json(vendor);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: 'An error occured while signing in!' });
    }
};

const vendorSignOut = async (req: Request, res: Response) => {
    try {
        res.clearCookie("jwt");
        res.json({ "message": "You are logged out successfully!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}


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


export { getVendors, vendorSignin, vendorCheck, vendorSignup, vendorSignOut };

