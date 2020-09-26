"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Farmer_router = void 0;
const farmercontroller = __importStar(require("../Controllers/Farmer.controller"));
const express_1 = __importDefault(require("express"));
exports.Farmer_router = express_1.default.Router();
exports.Farmer_router.all("/info", (req, res) => {
    res.status(200).send("CRUD API endpoints for handling Farmer operations");
});
//get host/farmer
exports.Farmer_router.get("", farmercontroller.getAllFarmers);
// //post host/farmer/
// router.post("/",farmercontroller.createFarmer)
//delete host/farmer/id
exports.Farmer_router.delete("/:id", farmercontroller.deleteFarmer);
//post host/farmer/update
exports.Farmer_router.post("/update", farmercontroller.updateFarmer);
//get host/farmer/:id
exports.Farmer_router.get("/find", farmercontroller.getFarmerbyId);
//post host/farmer/:limit
exports.Farmer_router.post("/:limit", farmercontroller.getNFarmers);
//post host/farmer
exports.Farmer_router.post("", farmercontroller.getFarmers);
//get host/farmer/location
exports.Farmer_router.get("/locaton", farmercontroller.getFarmerByCountryAndState);
//get host/farmer/organization
exports.Farmer_router.get("/organization", farmercontroller.searchOrganization);
//post host/farmer/rate
exports.Farmer_router.post("/rate", farmercontroller.rateFarmer);
//post host/farmer/tags
exports.Farmer_router.post("/tags", farmercontroller.rateFarmer);
//# sourceMappingURL=farmer.routes.js.map