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
exports.Product_Router = void 0;
const productcontroller = __importStar(require("../Controllers/Product.controller"));
const express_1 = __importDefault(require("express"));
const Response_custom_1 = require("../Utils/Response.custom");
exports.Product_Router = express_1.default.Router();
exports.Product_Router.all("/info", (req, res) => {
    return Response_custom_1.createResponse(res, "CRUD API For handling Farmer Product operations", {}, 200);
});
//post host/product
exports.Product_Router.post("", productcontroller.createProduct);
// get host/product
exports.Product_Router.get("", productcontroller.getAllProducts);
//get host/product/find
exports.Product_Router.get("/find", productcontroller.getProductbyId);
//post host/product/find
exports.Product_Router.post("/find", productcontroller.getProducts);
//post host/product/find/:limit
exports.Product_Router.post("/find/:limit", productcontroller.getNProducts);
//post host/product/update [not all fields TODO breakdown]
exports.Product_Router.post("/update", productcontroller.updateProduct);
//delete host/product/:id
exports.Product_Router.delete("/:id", productcontroller.deleteProduct);
//post host/product/farmer
exports.Product_Router.post("/farmer", productcontroller.getProductsByFarmer);
//post host/product/stock
exports.Product_Router.post("/stock", productcontroller.restockProduct);
//post host/product/stock/status
exports.Product_Router.post("/stock/status", productcontroller.updateRestockStatus);
//post host/product/category
exports.Product_Router.post("/category", productcontroller.getProductsByCategory);
//# sourceMappingURL=product.routes.js.map