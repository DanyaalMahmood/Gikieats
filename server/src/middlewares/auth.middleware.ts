import { Request, Response, NextFunction } from 'express';
import { PrismaClient, User } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const secret = process.env.SECRET;



const checkUser = async (req: Request, res: Response, next: NextFunction) => {


    const token = req.cookies.jwt;

    if (token === null || typeof (secret) !== "string") {
        res.status(400);
        return res.json({ "error": "jwt error" });
    }

    let decode: any;
    if (token) {
        jwt.verify(token, secret, async (err: any, decodedToken: any) => {
            if (err) {
                return res.json({ "error": "Not a valid json token and user is not authenticated!" });
            } else {
                next();
            }
        });

    } else {
        res.json({ "error": "You are not logged in! " })
    }
};


export { checkUser };