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
exports.getFarmerByNiche = exports.searchOrganization = exports.rateFarmer = exports.getFarmerByCountryAndState = exports.getNFarmers = exports.getFarmers = exports.getFarmerbyId = exports.updateFarmer = exports.getAllFarmers = exports.deleteFarmer = void 0;
const Farmer_repository_1 = require("../repositories/Farmer.repository");
const Farmer_1 = require("../entities/Farmer");
const string_utils_1 = require("../Utils/string.utils");
const Response_custom_1 = require("../Utils/Response.custom");
const repository = new Farmer_repository_1.FarmerRepository(Farmer_1.FarmerModel);
exports.deleteFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield repository.delete(id);
    if (result) {
        return Response_custom_1.createResponse(res, `Delete ${id} Successfully`, undefined, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Delete Operation Failed", undefined, 500);
    }
});
exports.getAllFarmers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    const result = yield repository.find(query);
    if (result) {
        return Response_custom_1.createResponse(res, "Farmers found", result, 200);
    }
    return Response_custom_1.createResponse(res, "Farmers not found", undefined, 404);
});
exports.updateFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = String(req.query.id);
    const update = req.body;
    const result = yield repository.update(id, update);
    if (result) {
        return Response_custom_1.createResponse(res, "Farmer updated", result, 200);
    }
    return Response_custom_1.createResponse(res, "Farmer not found", undefined, 404);
});
exports.getFarmerbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const result = yield repository.findOne({ _id: id });
    // console.log(Boolean(result))
    if (result) {
        return Response_custom_1.createResponse(res, "Farmer found", result, 200);
    }
    return Response_custom_1.createResponse(res, "Farmer not found", undefined, 404);
});
exports.getFarmers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body;
    // console.log(query)
    const result = yield repository.find(query);
    // console.log(Boolean(result))
    if (result) {
        if (result.length > 0) {
            return Response_custom_1.createResponse(res, "Farmers found", result, 200);
        }
        else {
            return Response_custom_1.createResponse(res, "Farmers not found", undefined, 404);
        }
    }
    return Response_custom_1.createResponse(res, "Bad request. Operation failed", undefined, 500);
});
exports.getNFarmers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body;
    if (req.params.limit != "" && !isNaN(Number(req.params.limit))) {
        const limit = Number(req.params.limit);
        const result = yield repository.findN(query, limit);
        // console.log(result)
        if (result) {
            if (result.length > 0) {
                return Response_custom_1.createResponse(res, "Farmers found", result, 200);
            }
            else {
                return Response_custom_1.createResponse(res, "Farmers not found", undefined, 404);
            }
        }
        return Response_custom_1.createResponse(res, "Bad request. Operation failed", undefined, 500);
    }
    else {
        return Response_custom_1.createResponse(res, "Parameter not found", undefined, 500);
    }
});
exports.getFarmerByCountryAndState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const country = string_utils_1.capitalizeFirstLetterOnly(req.query.country);
    const state = string_utils_1.capitalizeFirstLetterOnly(req.query.state);
    let result;
    if (country && state) {
        result = yield repository.getFarmersinCountryandState(country, state);
    }
    else if (country) {
        result = yield repository.getFarmersinCountry(country);
    }
    if (result) {
        if (result.length > 0) {
            return Response_custom_1.createResponse(res, "Users found", result, 200);
        }
        return Response_custom_1.createResponse(res, "Users not found", undefined, 404);
    }
    else {
        return Response_custom_1.createResponse(res, "Error Occured", undefined, 500);
    }
});
exports.rateFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const farmerid = req.body.id;
    const rating = req.body.rating;
    const result = yield repository.rateFarmer(farmerid, rating);
    if (result) {
        return Response_custom_1.createResponse(res, "Farmer rated", result, 200);
    }
    return Response_custom_1.createResponse(res, "Error updating rating", {}, 500);
});
exports.searchOrganization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO search case insensitive
    const org = String(req.query.q);
    const result = yield repository.searchByOrganization(org);
    if (result) {
        return Response_custom_1.createResponse(res, "Search results", result, 200);
    }
    return Response_custom_1.createResponse(res, "Error occured during search", {}, 500);
});
exports.getFarmerByNiche = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const niches = req.body.niches;
    if (!(niches.length > 0)) {
        return Response_custom_1.createResponse(res, "no results available", undefined, 404);
    }
    const result = yield repository.getFarmersbyNiche(niches);
    if (result) {
        if (result.length > 0) {
            return Response_custom_1.createResponse(res, "Farmers found", result, 200);
        }
        return Response_custom_1.createResponse(res, "no results available", undefined, 404);
    }
    else {
        return Response_custom_1.createResponse(res, "Error Ocuured", undefined, 500);
    }
});
//# sourceMappingURL=Farmer.controller.js.map