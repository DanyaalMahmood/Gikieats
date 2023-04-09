"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCheck = exports.userSignin = exports.userSignup = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const secret = process.env.SECRET;
const userSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (body.name === undefined ||
        body.email === undefined ||
        body.regno === undefined ||
        body.password === undefined ||
        body.phoneno === undefined ||
        body.hostel === undefined) {
        res.status(400);
        return res.json("error: Invalid Request Parameters");
    }
    const salt = yield bcrypt_1.default.genSalt();
    const hashedPassword = yield bcrypt_1.default.hash(body.password, salt);
    const user = { name: body.name, email: body.email, regno: body.regno, password: hashedPassword, phoneno: body.phoneno, hostel: parseInt(body.hostel) };
    let createdUser;
    try {
        let users = yield prisma.user.findMany({
            where: {
                regno: body.regno,
            },
        });
        if (users.length > 0) {
            return res.status(400).json({ error: 'User with this regno already exists!' });
        }
        users = yield prisma.user.findMany({
            where: {
                email: body.email,
            },
        });
        if (users.length > 0) {
            return res.status(400).json({ error: 'User with this email already exists!' });
        }
        createdUser = yield prisma.user.create({
            data: user
        });
        if (typeof (secret) === "string") {
            const tokenbody = { name: createdUser.name, regno: createdUser.regno };
            const token = yield jsonwebtoken_1.default.sign(tokenbody, secret, {
                expiresIn: 3 * 24 * 60 * 60,
            });
            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: 3 * 24 * 60 * 60 * 1000,
            });
        }
        return res.json(createdUser);
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            console.log(error.message);
            return res.json(`error: ${error.message}`);
        }
        else {
            console.log(error);
            return res.json("error:prisma error occured");
        }
    }
});
exports.userSignup = userSignup;
const userSignin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (body.email === undefined ||
        body.password === undefined) {
        res.status(400);
        return res.json("error: Invalid Request Parameters");
    }
    try {
        let users = yield prisma.user.findMany({
            where: {
                email: body.email,
            },
        });
        if (users.length === 0) {
            return res.status(400).json({ error: 'No user with this email exists!' });
        }
        const checkPassword = yield bcrypt_1.default.compare(body.password, users[0].password);
        if (checkPassword === false) {
            return res.status(400).json({ error: 'Incorrect Password' });
        }
        if (typeof (secret) === "string") {
            const tokenbody = { name: users[0].name, regno: users[0].regno };
            const token = yield jsonwebtoken_1.default.sign(tokenbody, secret, {
                expiresIn: 3 * 24 * 60 * 60,
            });
            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: 3 * 24 * 60 * 60 * 1000,
            });
        }
        res.json(users[0]);
    }
    catch (err) {
        res.status(400).json({ error: 'An error occured while signing in!' });
    }
});
exports.userSignin = userSignin;
const userCheck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies.jwt;
        if (token === null || typeof (secret) !== "string") {
            res.status(400);
            return res.json({ "error": "jwt error" });
        }
        let decode;
        jsonwebtoken_1.default.verify(token, secret, (err, decodedToken) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                return res.json({ "error": "Not a valid json token" });
            }
            else {
                decode = jsonwebtoken_1.default.decode(token);
            }
        }));
        if (decode === undefined || decode.regno === undefined)
            return;
        const regno = decode.regno;
        //querying the data base for users on basis of the recieved number
        const user = yield prisma.user.findFirst({
            where: {
                regno: regno,
            },
        });
        res.json(user);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ error: 'An error occured while signing in!' });
    }
});
exports.userCheck = userCheck;
