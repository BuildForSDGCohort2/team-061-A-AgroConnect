"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_Router = void 0;
const express_1 = __importDefault(require("express"));
const Response_custom_1 = require("../Utils/Response.custom");
exports.Customer_Router = express_1.default.Router();
exports.Customer_Router.all("/info", (req, res) => {
    return Response_custom_1.createResponse(res, "CRUD API For handling Customer operations", {}, 200);
});
//# sourceMappingURL=customer.routes.js.map
