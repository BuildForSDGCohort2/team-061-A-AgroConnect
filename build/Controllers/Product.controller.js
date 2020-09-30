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
exports.getProductsByCategory = exports.updateRestockStatus = exports.restockProduct = exports.getProductsByFarmer = exports.getNProducts = exports.getProducts = exports.getProductbyId = exports.updateProduct = exports.getAllProducts = exports.deleteProduct = exports.createProduct = void 0;
const Product_repository_1 = require("../repositories/Product.repository");
const Product_1 = require("../entities/Product");
const Response_custom_1 = require("../Utils/Response.custom");
const repository = new Product_repository_1.ProductRepository(Product_1.ProductModel);
exports.createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = req.body;
    const result = yield repository.create(product);
    if (Boolean(result)) {
        const newProduct = yield repository.findOne({ _id: result });
        return Response_custom_1.createResponse(res, "Product created", newProduct, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Error creating product in db", undefined, 500);
    }
});
exports.deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield repository.delete(id);
    if (result) {
        return res.send("Deleted " + id + " successfully");
    }
    return res.status(500).send("Delete operation failed");
});
exports.getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    const result = yield repository.find(query);
    if (result.length > 0) {
        return Response_custom_1.createResponse(res, "Products found", result, 200);
    }
    return Response_custom_1.createResponse(res, "Fatal error occured", undefined, 500);
});
exports.updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = String(req.query.id);
    const update = req.body;
    const result = yield repository.update(id, update);
    if (Boolean(result)) {
        // console.log(result.firstname)
        return Response_custom_1.createResponse(res, "Product found", result, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Product not found", undefined, 404);
    }
});
exports.getProductbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const result = yield repository.findOne({ _id: id });
    // console.log(Boolean(result))
    if (Boolean(result)) {
        // console.log(result.firstname)
        return Response_custom_1.createResponse(res, "Product found", result, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Product not found", undefined, 404);
    }
});
exports.getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body;
    // console.log(query)
    const result = yield repository.find(query);
    console.log(Boolean(result));
    if (result.length > 0) {
        console.log("done");
        return Response_custom_1.createResponse(res, "Products found", result, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Products not found", undefined, 404);
    }
});
exports.getNProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body;
    if (req.params.limit != "" && !isNaN(Number(req.params.limit))) {
        const limit = Number(req.params.limit);
        const result = yield repository.findN(query, limit);
        console.log(result);
        if (result.length > 0) {
            return Response_custom_1.createResponse(res, "Products found", result, 200);
        }
        else {
            return Response_custom_1.createResponse(res, "products not found", undefined, 404);
        }
    }
    else {
        return Response_custom_1.createResponse(res, "Parameter not found", undefined, 500);
    }
});
exports.getProductsByFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const farmerid = req.body.id;
    const result = yield repository.getProductsByFarmer(farmerid);
    if (Boolean(result)) {
        return Response_custom_1.createResponse(res, "Products found", result, 200);
    }
    return Response_custom_1.createResponse(res, "Error getting products", {}, 500);
});
exports.restockProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productid = req.body.id;
    const stock = Number(req.body.stock);
    const harvest = new Date(req.body.harvest);
    const result = yield repository.restockProducts(productid, stock, harvest);
    if (Boolean(result)) {
        return Response_custom_1.createResponse(res, "Stock details updated", result, 200);
    }
    return Response_custom_1.createResponse(res, "Error updating stock details", {}, 500);
});
exports.updateRestockStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productid = req.body.id;
    const status = String(req.body.status);
    const result = yield repository.updateRestockStatus(productid, status);
    if (Boolean(result)) {
        return Response_custom_1.createResponse(res, "Stock details updated", result, 200);
    }
    return Response_custom_1.createResponse(res, "Error updating stock details", {}, 500);
});
exports.getProductsByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = req.body.category;
    const result = yield repository.getProductsByCategory(categories);
    if (result.length > 0) {
        return Response_custom_1.createResponse(res, "Products found", result, 200);
    }
    return Response_custom_1.createResponse(res, "Products not found/error occured", [], 404);
});
//# sourceMappingURL=Product.controller.js.map
