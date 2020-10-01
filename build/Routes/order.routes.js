"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order_Router = void 0;
const ordercontroller = __importStar(require("../Controllers/Order.controller"));
const express_1 = __importDefault(require("express"));
const Response_custom_1 = require("../Utils/Response.custom");
exports.Order_Router = express_1.default.Router();
exports.Order_Router.all("/info", (req, res) => {
    return Response_custom_1.createResponse(res, "CRUD API For handling Product Order operations", {}, 200);
});
//get host/order/
exports.Order_Router.get("/", ordercontroller.getAllOrder);
//delete host/order/id
exports.Order_Router.delete("/:id", ordercontroller.deleteOrder);
//post host/order/update
exports.Order_Router.post("/update", ordercontroller.updateOrder);
//get host/order/:id
exports.Order_Router.get("/find", ordercontroller.getOrderById);
//post host/order/:limit
exports.Order_Router.post("/:limit", ordercontroller.getNOrders);
//post host/order/
exports.Order_Router.post("/", ordercontroller.getOrders);
//# sourceMappingURL=order.routes.js.map