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
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOthers = exports.findFastFood = exports.findDesi = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const findDesi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const desiItems = yield prisma.item.findMany({
            where: {
                category: 'desi'
            }
        });
        res.status(200).json(desiItems);
    }
    catch (err) {
        res.status(400).json({ error: 'Something went wrong' });
    }
});
exports.findDesi = findDesi;
const findFastFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fastfoodItems = yield prisma.item.findMany({
            where: {
                category: 'fastfood'
            }
        });
        res.status(200).json(fastfoodItems);
    }
    catch (err) {
        res.status(400).json({ error: 'Something went wrong' });
    }
});
exports.findFastFood = findFastFood;
const findOthers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const otherItems = yield prisma.item.findMany({
            where: {
                category: 'other'
            }
        });
        res.status(200).json(otherItems);
    }
    catch (err) {
        res.status(400).json({ error: 'Something went wrong' });
    }
});
exports.findOthers = findOthers;
