"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_Router = void 0;
const express_1 = __importDefault(require("express"));
const Response_custom_1 = require("../Utils/Response.custom");
exports.Product_Router = express_1.default.Router();
exports.Product_Router.all("/info", (req, res) => {
    return Response_custom_1.createResponse(res, "CRUD API For handling Farmer Product operations", {}, 200);
});
