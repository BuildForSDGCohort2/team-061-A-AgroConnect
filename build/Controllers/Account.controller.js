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
exports.createFarmer = exports.Login = void 0;
const Farmer_repository_1 = require("../repositories/Farmer.repository");
const typegoose_1 = require("@typegoose/typegoose");
const Farmer_1 = require("../entities/Farmer");
const Response_custom_1 = require("../Utils/Response.custom");
const Farmer_repository = new Farmer_repository_1.FarmerRepository(typegoose_1.getModelForClass(Farmer_1.Farmer));
exports.Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const type = req.body.type;
    const email = req.body.email;
    const pass = req.body.password;
    const query = { email: email, password: pass };
    if (type == "Farmer") {
        const farmer = yield Farmer_repository.findOne(query);
        if (farmer) {
            farmer.password = "";
            return Response_custom_1.createResponse(res, "Login Successfull", farmer, 200);
        }
        else {
            return Response_custom_1.createResponse(res, "User not found", {}, 404);
        }
    }
    else if (type == "Customer") {
    }
});
exports.createFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const farmer = req.body;
    const existing = yield Farmer_repository.findOne({ email: farmer.email });
    if (existing) {
        return Response_custom_1.createResponse(res, "User with email Exists Already", {}, 500);
    }
    else {
        const result = yield Farmer_repository.create(farmer);
        // console.log(result);
        if (result) {
            const newFarmer = yield Farmer_repository.findOne(result);
            // console.log(newFarmer)
            return Response_custom_1.createResponse(res, "User Created Successfully", newFarmer, 200);
        }
        return Response_custom_1.createResponse(res, "Problem creating user", {}, 500);
    }
});
// export let retrievePassword
