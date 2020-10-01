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
exports.Tag_Router = void 0;
const tagcontroller = __importStar(require("../Controllers/Tag.controller"));
const express_1 = __importDefault(require("express"));
const Response_custom_1 = require("../Utils/Response.custom");
exports.Tag_Router = express_1.default.Router();
exports.Tag_Router.all("/info", (req, res) => {
    return Response_custom_1.createResponse(res, "CRUD API For handling Tags for Reuest and niche identification", {}, 200);
});
//post host/tag
exports.Tag_Router.post("", tagcontroller.createTag);
//get host/tag/
exports.Tag_Router.get("/", tagcontroller.getAllTag);
//delete host/tag/id
exports.Tag_Router.delete("/:id", tagcontroller.deleteTag);
//post host/tag/update
exports.Tag_Router.post("/update", tagcontroller.updateTag);
//get host/tag/:id
exports.Tag_Router.get("/find", tagcontroller.getTagById);
//post host/tag/:limit
exports.Tag_Router.post("/:limit", tagcontroller.getNTags);
//post host/tag/
exports.Tag_Router.post("/", tagcontroller.getTags);
//# sourceMappingURL=tag.routes.js.map