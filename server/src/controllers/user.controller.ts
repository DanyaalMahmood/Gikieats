import { Request, Response } from "express"

import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

import jwt, { JwtPayload } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { type } from "os";

const secret = process.env.SECRET;

interface User {
    regno: string
    name: string
    hostel: number
    phoneno: string
    email: string
    password: string
}

interface UserBody {
    regno: string
    name: string
    hostel: string
    phoneno: string
    email: string
    password: string
}

const userSignup = async (req: Request, res: Response) => {
    const body: UserBody = req.body;

    if (body.name === undefined ||
        body.email === undefined ||
        body.regno === undefined ||
        body.password === undefined ||
        body.phoneno === undefined ||
        body.hostel === undefined) {

        res.status(400);
        return res.json("error: Invalid Request Parameters");
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(body.password, salt);


    const user: User = { name: body.name, email: body.email, regno: body.regno, password: hashedPassword, phoneno: body.phoneno, hostel: parseInt(body.hostel) };

    let createdUser: User;

    try {

        let users = await prisma.user.findMany({
            where: {
                regno: body.regno,
            },
        });

        if (users.length > 0) {
            res.status(400)
            return res.json({ error: 'User with this regno already exists!' });
        }

        users = await prisma.user.findMany({
            where: {
                email: body.email,
            },
        });

        if (users.length > 0) {
            res.status(400)
            return res.json({ error: 'User with this email already exists!' });
        }

        createdUser = await prisma.user.create({
            data: user
        });


        if (typeof (secret) === "string") {

            const tokenbody = { name: createdUser.name, regno: createdUser.regno };
            const token = await jwt.sign(tokenbody, secret, {
                expiresIn: 3 * 24 * 60 * 60,
            });

            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: 3 * 24 * 60 * 60 * 1000,
            });
        }



        return res.json(createdUser);

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


const userSignin = async (req: Request, res: Response) => {
    const body: UserBody = req.body;
    console.log('signin');

    if (body.email === undefined ||
        body.password === undefined) {

        res.status(400);
        return res.json("error: Invalid Request Parameters");
    }

    try {
        let users = await prisma.user.findMany({
            where: {
                email: body.email,
            },
        });

        if (users.length === 0) {
            return res.status(400).json({ error: 'No user with this email exists!' });
        }

        const checkPassword = await bcrypt.compare(body.password, users[0].password);

        if (checkPassword === false) {
            return res.status(400).json({ error: 'Incorrect Password' });
        }

        if (typeof (secret) === "string") {

            const tokenbody = { name: users[0].name, regno: users[0].regno };
            const token = await jwt.sign(tokenbody, secret, {
                expiresIn: 3 * 24 * 60 * 60,
            });

            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: 3 * 24 * 60 * 60 * 1000,
            });
        }

        res.json(users[0]);
    } catch (err) {
        res.status(400).json({ error: 'An error occured while signing in!' });
    }

}



const userCheck = async (req: Request, res: Response) => {
    console.log('check');

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


        //querying the data base for users on basis of the recieved number
        const user = await prisma.user.findFirst({
            where: {
                regno: regno,
            },
        });

        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: 'An error occured while signing in!' });
    }
};

const userSignOut = async (req: Request, res: Response) => {
    try {
        res.clearCookie("jwt");
        res.json({ "message": "You are logged out successfully!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

export { userSignup, userSignin, userCheck, userSignOut };