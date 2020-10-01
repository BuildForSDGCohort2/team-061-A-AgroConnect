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
exports.getNOrders = exports.getOrders = exports.getOrderById = exports.getAllOrder = exports.updateOrder = exports.deleteOrder = void 0;
const Order_repository_1 = require("../repositories/Order.repository");
const Order_1 = require("../entities/Order");
const Response_custom_1 = require("../Utils/Response.custom");
const repository = new Order_repository_1.OrderRepository(Order_1.OrderModel);
exports.deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield repository.delete(id);
    if (!result)
        return Response_custom_1.createResponse(res, 'Bad request. Operation failed', undefined, 500);
    return Response_custom_1.createResponse(res, "Order deleted", undefined, 200);
});
exports.updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = String(req.params.id);
    const update_order = req.body;
    const result = yield repository.update(id, update_order);
    //Object to update
    if (!result)
        return Response_custom_1.createResponse(res, 'Update Operation failed', undefined, 404);
    return Response_custom_1.createResponse(res, "Order Updated", result, 200);
});
exports.getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    const result = repository.find(query);
    if (!result)
        return Response_custom_1.createResponse(res, 'Orders not found', undefined, 404);
    return Response_custom_1.createResponse(res, "Orders Found", result, 200);
});
exports.getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const result = yield repository.findOne({ _id: id });
    if (!result)
        return Response_custom_1.createResponse(res, 'Orders not found', undefined, 404);
    return Response_custom_1.createResponse(res, "Orders Found", result, 200);
});
exports.getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body;
    //console.log(query)
    const result = yield repository.find(query);
    // console.log(Boolean(result))
    if (result) {
        // console.log("done")
        return Response_custom_1.createResponse(res, "Orders found", result, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Orders not found", undefined, 404);
    }
});
exports.getNOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body;
    // console.log(query)
    if (req.params.limit != "" && !isNaN(Number(req.params.limit))) {
        const limit = Number(req.params.limit);
        const result = yield repository.findN(query, limit);
        // console.log(result)
        if (result) {
            return Response_custom_1.createResponse(res, "Orders found", result, 200);
        }
        else {
            return Response_custom_1.createResponse(res, "Order not found", undefined, 404);
        }
    }
    else {
        return Response_custom_1.createResponse(res, "Bad request. Operation failed", undefined, 500);
    }
});
//# sourceMappingURL=Order.controller.js.map