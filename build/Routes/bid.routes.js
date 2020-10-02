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
exports.Bid_Router = void 0;
const bidcontroller = __importStar(require("../Controllers/Bid.controller"));
const express_1 = __importDefault(require("express"));
const Response_custom_1 = require("../Utils/Response.custom");
exports.Bid_Router = express_1.default.Router();
exports.Bid_Router.all("/info", (req, res) => {
    return Response_custom_1.createResponse(res, "CRUD API For hBids", {}, 200);
});
//post host/bid
exports.Bid_Router.post("", bidcontroller.createBid);
//get host/bid/
exports.Bid_Router.get("/", bidcontroller.getAllBid);
//delete host/bid/id
exports.Bid_Router.delete("/:id", bidcontroller.deleteBid);
//post host/bid/update
exports.Bid_Router.post("/update", bidcontroller.updateBid);
//get host/bid/:id
exports.Bid_Router.get("/find", bidcontroller.getBidById);
//post host/bid/find
exports.Bid_Router.post("/find", bidcontroller.getBids);
//post host/bid/find/:limit
exports.Bid_Router.post("/find/:limit", bidcontroller.getNBids);
//post host/bid/find/farmer
exports.Bid_Router.get("/find/farmer", bidcontroller.getBidsByFarmer);
//post host/bid/find/request
exports.Bid_Router.get("/find/request", bidcontroller.getBidsbyRequest);
//# sourceMappingURL=bid.routes.js.map