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
exports.getRequestByTags = exports.getRequestByCustomer = exports.getOpenRequests = exports.getNRequests = exports.getRequests = exports.getRequestById = exports.getAllRequest = exports.updateRequest = exports.deleteRequest = exports.createRequest = void 0;
const Request_repository_1 = require("../repositories/Request.repository");
const Request_1 = require("../entities/Request");
const Response_custom_1 = require("../Utils/Response.custom");
const repository = new Request_repository_1.RequestRepository(Request_1.RequestModel);
exports.createRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Request = req.body;
    const result = yield repository.create(Request);
    if (result) {
        const newRequest = yield repository.findOne({ _id: result });
        return Response_custom_1.createResponse(res, "Request created", newRequest, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Error creating Request in db", undefined, 500);
    }
});
exports.deleteRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield repository.delete(id);
    if (!result)
        return Response_custom_1.createResponse(res, 'Delete Operation Failed', undefined, 500);
    return Response_custom_1.createResponse(res, "Request deleted", undefined, 200);
});
exports.updateRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = String(req.query.id);
    const update_request = req.body;
    const result = yield repository.update(id, update_request);
    //Object to update
    if (!result)
        return Response_custom_1.createResponse(res, 'Update Operation failed', undefined, 500);
    return Response_custom_1.createResponse(res, "Request Updated", result, 200);
});
exports.getAllRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    const result = yield repository.find(query);
    if (!result)
        return Response_custom_1.createResponse(res, 'Requests not found', undefined, 404);
    return Response_custom_1.createResponse(res, "Requests found", result, 200);
});
exports.getRequestById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const result = yield repository.findOne({ _id: id });
    if (!result)
        return Response_custom_1.createResponse(res, 'Request not found', undefined, 404);
    return Response_custom_1.createResponse(res, "Request found", result, 200);
});
exports.getRequests = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body;
    //console.log(query)
    const result = yield repository.find(query);
    // console.log(Boolean(result))
    if (result) {
        if (result.length > 0) {
            return Response_custom_1.createResponse(res, "Requests found", result, 200);
        }
        else {
            return Response_custom_1.createResponse(res, "Request not found", undefined, 404);
        }
    }
    return Response_custom_1.createResponse(res, "Bad request. Operation failed", undefined, 500);
});
exports.getNRequests = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body;
    // console.log(query)
    if (req.params.limit != "" && !isNaN(Number(req.params.limit))) {
        const limit = Number(req.params.limit);
        const result = yield repository.findN(query, limit);
        // console.log(result)
        if (result) {
            if (result.length > 0) {
                return Response_custom_1.createResponse(res, "Requests found", result, 200);
            }
            else {
                return Response_custom_1.createResponse(res, "Request not found", undefined, 404);
            }
        }
        return Response_custom_1.createResponse(res, "Bad request. Operation failed", undefined, 500);
    }
    else {
        return Response_custom_1.createResponse(res, "Parameter not found", undefined, 500);
    }
});
exports.getOpenRequests = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield repository.getOpenRequests();
    if (result) {
        return Response_custom_1.createResponse(res, "Requests found", result, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Operation failed", undefined, 500);
    }
});
exports.getRequestByCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerid = req.query.id;
    const result = yield repository.getRequestByCustomer(customerid);
    if (result) {
        return Response_custom_1.createResponse(res, "Requests found", result, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Operation failed", undefined, 500);
    }
});
exports.getRequestByTags = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tags = req.body.tag;
    const result = yield repository.getRequestByTags(tags);
    if (result) {
        if (result.length > 0) {
            return Response_custom_1.createResponse(res, "Requests found", result, 200);
        }
        else {
            return Response_custom_1.createResponse(res, "Request not found", undefined, 404);
        }
    }
    return Response_custom_1.createResponse(res, "Bad request. Operation failed", undefined, 500);
});
//# sourceMappingURL=Request.controller.js.map