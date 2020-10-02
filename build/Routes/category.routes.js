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
exports.Category_Router = void 0;
const categorycontroller = __importStar(require("../Controllers/Category.controller"));
const express_1 = __importDefault(require("express"));
const Response_custom_1 = require("../Utils/Response.custom");
exports.Category_Router = express_1.default.Router();
exports.Category_Router.all("/info", (req, res) => {
    return Response_custom_1.createResponse(res, "CRUD API For handling Product Categories", {}, 200);
});
//post host/category/
exports.Category_Router.post("/", categorycontroller.createCategory);
//get host/category/
exports.Category_Router.get("/", categorycontroller.getAllCategory);
//delete host/category/id
exports.Category_Router.delete("/:id", categorycontroller.deleteCategory);
//post host/category/update
exports.Category_Router.post("/update", categorycontroller.updateCategory);
//get host/category/:id
exports.Category_Router.get("/find", categorycontroller.getCategoryById);
//post host/category/find
exports.Category_Router.post("/find", categorycontroller.getCategories);
//post host/category/find/:limit
exports.Category_Router.post("/find/:limit", categorycontroller.getNCategories);
//# sourceMappingURL=category.routes.js.map