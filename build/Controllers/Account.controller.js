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
exports.createCustomer = exports.createFarmer = exports.Login = void 0;
const Farmer_repository_1 = require("../repositories/Farmer.repository");
const Customer_repository_1 = require("../repositories/Customer.repository");
const Farmer_1 = require("../entities/Farmer");
const Customer_1 = require("../entities/Customer");
const Response_custom_1 = require("../Utils/Response.custom");
const Farmer_repository = new Farmer_repository_1.FarmerRepository(Farmer_1.FarmerModel);
const Customer_repository = new Customer_repository_1.CustomerRepository(Customer_1.CustomerModel);
exports.Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const type = req.body.type;
    const email = req.body.email;
    const pass = req.body.password;
    if (email.length < 0 || pass.length < 0) {
        return Response_custom_1.createResponse(res, "Invalid login credentials", {}, 502);
    }
    const query = { email: email, password: pass };
    if (type == "Farmer") {
        const farmer = yield Farmer_repository.findOne(query);
        if (farmer) {
            // farmer.password = ""
            return Response_custom_1.createResponse(res, "Login Successfull", farmer, 200);
        }
        else {
            return Response_custom_1.createResponse(res, "User not found", {}, 404);
        }
    }
    else if (type == "Customer") {
        const customer = yield Customer_repository.findOne(query);
        if (customer) {
            customer.password = "";
            return Response_custom_1.createResponse(res, "Login Successfull", customer, 200);
        }
        else {
            return Response_custom_1.createResponse(res, "User not found", {}, 404);
        }
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
            const newFarmer = yield Farmer_repository.findOne({ _id: result });
            // console.log(newFarmer)
            return Response_custom_1.createResponse(res, "User Created Successfully", newFarmer, 200);
        }
        return Response_custom_1.createResponse(res, "Problem creating user", {}, 500);
    }
});
exports.createCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = req.body;
    const existing = yield Customer_repository.findOne({ email: customer.email });
    if (existing) {
        return Response_custom_1.createResponse(res, "User with email exists already", {}, 500);
    }
    else {
        const result = yield Customer_repository.create(customer);
        if (result) {
            const newCustomer = yield Customer_repository.findOne({ _id: result });
            return Response_custom_1.createResponse(res, "User Created Successfully", newCustomer, 200);
        }
        return Response_custom_1.createResponse(res, "Problem creating user", {}, 500);
    }
});
// export let retrievePassword
//# sourceMappingURL=Account.controller.js.map
