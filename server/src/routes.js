"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const multer_2 = __importDefault(require("./config/multer"));
const OrphanagesController_1 = __importDefault(require("./controllers/OrphanagesController"));
const routes = express_1.Router();
const upload = multer_1.default(multer_2.default);
routes.get('/orphanages', OrphanagesController_1.default.index);
routes.get('/orphanages/:id', OrphanagesController_1.default.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController_1.default.create);
exports.default = routes;
