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
exports.getBidsbyRequest = exports.getBidsByFarmer = exports.getNBids = exports.getBids = exports.getBidById = exports.getAllBid = exports.updateBid = exports.deleteBid = exports.createBid = void 0;
const Bid_repository_1 = require("../repositories/Bid.repository");
const Bid_1 = require("../entities/Bid");
const Response_custom_1 = require("../Utils/Response.custom");
const repository = new Bid_repository_1.BidRepository(Bid_1.BidModel);
exports.createBid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Bid = req.body;
    const result = yield repository.create(Bid);
    if (result) {
        const newBid = yield repository.findOne({ _id: result });
        return Response_custom_1.createResponse(res, "Bid created", newBid, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Error creating Bid in db", undefined, 500);
    }
});
exports.deleteBid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield repository.delete(id);
    if (!result) {
        return Response_custom_1.createResponse(res, 'Bad request. Operation failed', undefined, 500);
    }
    else {
        return Response_custom_1.createResponse(res, `Bid ${id} deleted`, undefined, 200);
    }
});
exports.updateBid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = String(req.query.id);
    const update_bid = req.body;
    const result = yield repository.update(id, update_bid);
    //Object to update
    if (!result)
        return Response_custom_1.createResponse(res, 'Bids not found. Operation failed', undefined, 404);
    return Response_custom_1.createResponse(res, "Bid Updated", result, 200);
});
exports.getAllBid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    const result = yield repository.find(query);
    if (!result)
        return Response_custom_1.createResponse(res, 'Bids not found. Operation failed', undefined, 404);
    return Response_custom_1.createResponse(res, "Successful", result, 200);
});
exports.getBidById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const result = yield repository.findOne({ _id: id });
    if (!result)
        return Response_custom_1.createResponse(res, 'Bid not found. Operation failed', undefined, 404);
    return Response_custom_1.createResponse(res, "Successful", result, 200);
});
exports.getBids = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body;
    //console.log(query)
    const result = yield repository.find(query);
    // console.log(Boolean(result))
    if (result) {
        if (result.length > 0) {
            return Response_custom_1.createResponse(res, "Bids found", result, 200);
        }
        else {
            return Response_custom_1.createResponse(res, "Bids not found", undefined, 404);
        }
    }
    return Response_custom_1.createResponse(res, "Bad request. Operation failed", undefined, 500);
});
exports.getNBids = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body;
    // console.log(query)
    if (req.params.limit != "" && !isNaN(Number(req.params.limit))) {
        const limit = Number(req.params.limit);
        const result = yield repository.findN(query, limit);
        // console.log(result)
        if (result) {
            if (result.length > 0) {
                return Response_custom_1.createResponse(res, "Bids found", result, 200);
            }
            else {
                return Response_custom_1.createResponse(res, "Bids not found", undefined, 404);
            }
        }
        return Response_custom_1.createResponse(res, "Bad request. Operation failed", undefined, 500);
    }
    else {
        return Response_custom_1.createResponse(res, "Parameter not found. Operation failed", undefined, 500);
    }
});
exports.getBidsByFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const farmerid = req.query.id;
    const result = yield repository.getBidsByFarmer(farmerid);
    if (result) {
        return Response_custom_1.createResponse(res, "Bids found", result, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Error executing operation", undefined, 500);
    }
});
exports.getBidsbyRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const requestid = req.query.id;
    const result = yield repository.getBidsByRequest(requestid);
    if (result) {
        return Response_custom_1.createResponse(res, "Bids found", result, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Error executing operation", undefined, 500);
    }
});
//# sourceMappingURL=Bid.controller.js.map