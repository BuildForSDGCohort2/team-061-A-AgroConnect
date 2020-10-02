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
exports.Request_Router = void 0;
const requestcontroller = __importStar(require("../Controllers/Request.controller"));
const express_1 = __importDefault(require("express"));
const Response_custom_1 = require("../Utils/Response.custom");
exports.Request_Router = express_1.default.Router();
exports.Request_Router.all("/info", (req, res) => {
    return Response_custom_1.createResponse(res, "CRUD API For handling User Request operations", {}, 200);
});
//post host/request
exports.Request_Router.post("", requestcontroller.createRequest);
//get host/request/
exports.Request_Router.get("/", requestcontroller.getAllRequest);
//delete host/request/id
exports.Request_Router.delete("/:id", requestcontroller.deleteRequest);
//post host/request/update
exports.Request_Router.post("/update", requestcontroller.updateRequest);
//get host/request/:id
exports.Request_Router.get("/find", requestcontroller.getRequestById);
exports.Request_Router.get("/find/customer", requestcontroller.getRequestByCustomer);
//post host/request/find
exports.Request_Router.post("/find", requestcontroller.getRequests);
//post host/request/find/:limit
exports.Request_Router.post("/find/:limit", requestcontroller.getNRequests);
//post host/request/tags
exports.Request_Router.post("/tags", requestcontroller.getRequestByTags);
//get host/request/open
exports.Request_Router.get("/open", requestcontroller.getOpenRequests);
//get host/request/find/customer
exports.Request_Router.get("/find/customer", requestcontroller.getRequestByCustomer);
//# sourceMappingURL=request.routes.js.map