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
exports.getFarmers = exports.getFarmerbyId = exports.updateFarmer = exports.getAllFarmers = exports.deleteFarmer = void 0;
const Farmer_repository_1 = require("../repositories/Farmer.repository");
const Farmer_1 = require("../entities/Farmer");
const typegoose_1 = require("@typegoose/typegoose");
const repository = new Farmer_repository_1.FarmerRepository(typegoose_1.getModelForClass(Farmer_1.Farmer));
exports.deleteFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield repository.delete(id);
    if (result) {
        return res.send("Deleted " + id + " successfully");
    }
    return res.status(500).send("Delete operation failed");
});
exports.getAllFarmers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    const result = yield repository.find(query);
    if (result) {
        return res.send(result);
    }
    return res.status(500).send("Fatal error occured");
});
exports.updateFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = String(req.query.id);
    const update = req.body;
    const result = yield repository.update(id, update);
    if (Boolean(result)) {
        console.log(result.firstname);
        return res.send(result);
    }
    else {
        return res.status(404).send("User not found");
    }
});
exports.getFarmerbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const result = yield repository.findOne({ _id: id });
    // console.log(Boolean(result))
    if (Boolean(result)) {
        console.log(result.firstname);
        return res.send(result);
    }
    else {
        return res.status(404).send("User not found");
    }
});
exports.getFarmers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body;
    // console.log(query)
    if (req.params.limit != "") {
        const limit = Number(req.params.limit);
        const result = yield repository.findN(query, limit);
        console.log(result);
        if (result) {
            return res.send(result);
        }
    }
    else {
        const result = yield repository.find(query);
        console.log(Boolean(result));
        if (result) {
            console.log("done");
            return res.send(result);
        }
        else {
            return res.status(404).send({ message: "User not found" });
        }
    }
});
