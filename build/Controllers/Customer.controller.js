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
exports.getNCustomers = exports.getCustomers = exports.getCustomerById = exports.getAllCustomers = exports.updateCustomer = exports.deleteCustomer = void 0;
const Customer_repository_1 = require("../repositories/Customer.repository");
const Customer_1 = require("../entities/Customer");
const Response_custom_1 = require("../Utils/Response.custom");
const repository = new Customer_repository_1.CustomerRepository(Customer_1.CustomerModel);
exports.deleteCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield repository.delete(id);
    if (result) {
        return Response_custom_1.createResponse(res, `Deleted ${id} successfully`, undefined, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Delete Operation Failed", undefined, 500);
    }
});
exports.updateCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = String(req.params.id);
    const update = req.body;
    const result = yield repository.update(id, update);
    //Object properties to update
    if (result) {
        return Response_custom_1.createResponse(res, `Updated ${id} Successfully`, result, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Update Operation Failed", undefined, 500);
    }
});
exports.getAllCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    const result = yield repository.find(query);
    if (result) {
        return Response_custom_1.createResponse(res, "Customers found", result, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Customers not found", undefined, 404);
    }
});
exports.getCustomerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const result = yield repository.findOne({ _id: id });
    if (result) {
        return Response_custom_1.createResponse(res, "Customer found", result, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Customer not found", undefined, 404);
    }
});
exports.getCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body;
    //console.log(query)
    const result = yield repository.find(query);
    // console.log(Boolean(result))
    if (result) {
        return Response_custom_1.createResponse(res, "Customers found", result, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Customers not found", undefined, 404);
    }
});
exports.getNCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body;
    // console.log(query)
    if (req.params.limit != "" && !isNaN(Number(req.params.limit))) {
        const limit = Number(req.params.limit);
        const result = yield repository.findN(query, limit);
        // console.log(result)
        if (result) {
            return Response_custom_1.createResponse(res, "Customers found", result, 200);
        }
        else {
            return Response_custom_1.createResponse(res, "Customers not found", undefined, 404);
        }
    }
    else {
        return Response_custom_1.createResponse(res, "Parameter not found", undefined, 500);
    }
});
//# sourceMappingURL=Customer.controller.js.map