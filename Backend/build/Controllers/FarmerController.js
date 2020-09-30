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
exports.getFarmers = exports.deleteFarmer = exports.createFarmer = void 0;
const FarmerRepository_1 = require("../repositories/FarmerRepository");
const typegoose_1 = require("@typegoose/typegoose");
const Farmer_1 = require("../entities/Farmer");
const repository = new FarmerRepository_1.FarmerRepository(typegoose_1.getModelForClass(Farmer_1.Farmer));
exports.createFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const farmer = req.body;
    const result = yield repository.create(farmer);
    console.log(result);
    if (result) {
        const newFarmer = yield repository.findOne(result);
        console.log(newFarmer);
        return res.send(newFarmer);
    }
    return res.status(500).send("Problem creating user");
});
exports.deleteFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield repository.delete(id);
    if (result) {
        return res.send("Deleted " + id + " successfully");
    }
    return res.status(500).send("Delete operation failed");
});
exports.getFarmers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    const result = yield repository.find(query);
    if (result) {
        return res.send(result);
    }
    return res.status(500).send("Fatal error occured");
});
