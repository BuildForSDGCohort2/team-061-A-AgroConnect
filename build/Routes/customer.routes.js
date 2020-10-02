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
exports.Customer_Router = void 0;
const customercontroller = __importStar(require("../Controllers/Customer.controller"));
const Response_custom_1 = require("../Utils/Response.custom");
const express_1 = __importDefault(require("express"));
exports.Customer_Router = express_1.default.Router();
exports.Customer_Router.all("/info", (req, res) => {
    return Response_custom_1.createResponse(res, "CRUD API For handling Customer operations", {}, 200);
});
//get host/customer/
exports.Customer_Router.get("/", customercontroller.getAllCustomers);
// //post host/customer/
// router.post("/",Customercontroller.createCustomer)
//delete host/customer/id
exports.Customer_Router.delete("/:id", customercontroller.deleteCustomer);
//post host/customer/update
exports.Customer_Router.post("/update", customercontroller.updateCustomer);
//get host/customer/:id
exports.Customer_Router.get("/find", customercontroller.getCustomerById);
//post host/customer/find
exports.Customer_Router.post("/find", customercontroller.getAllCustomers);
//post host/customer/find/:limit
exports.Customer_Router.post("/find/:limit", customercontroller.getNCustomers);
//# sourceMappingURL=customer.routes.js.map