"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order_Router = void 0;
const express_1 = __importDefault(require("express"));
const Response_custom_1 = require("../Utils/Response.custom");
exports.Order_Router = express_1.default.Router();
exports.Order_Router.all("/info", (req, res) => {
    return Response_custom_1.createResponse(res, "CRUD API For handling Product Order operations", {}, 200);
});
//# sourceMappingURL=order.routes.js.map