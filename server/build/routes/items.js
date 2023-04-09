"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const items_controller_1 = require("../controllers/items.controller");
const items_controller_2 = require("../controllers/items.controller");
const items_controller_3 = require("../controllers/items.controller");
const itemRouter = express_1.default.Router();
itemRouter.get('/desi', items_controller_1.findDesi);
itemRouter.get('/fastfood', items_controller_2.findFastFood);
itemRouter.get('/other', items_controller_3.findOthers);
exports.default = itemRouter;
