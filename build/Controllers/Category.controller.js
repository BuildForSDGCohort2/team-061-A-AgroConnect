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
exports.getNCategories = exports.getCategories = exports.getCategoryById = exports.getAllCategory = exports.updateCategory = exports.deleteCategory = exports.createCategory = void 0;
const Category_repository_1 = require("../repositories/Category.repository");
const Category_1 = require("../entities/Category");
const Response_custom_1 = require("../Utils/Response.custom");
const repository = new Category_repository_1.CategoryRepository(Category_1.CategoryModel);
exports.createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Category = req.body;
    const result = yield repository.create(Category);
    if (result) {
        const newCategory = yield repository.findOne({ _id: result });
        return Response_custom_1.createResponse(res, "Category created", newCategory, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Error creating category in db", undefined, 500);
    }
});
exports.deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield repository.delete(id);
    if (result) {
        return Response_custom_1.createResponse(res, `Deleted ${id} Successfully`, undefined, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Delete Operation Failed", undefined, 500);
    }
});
exports.updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = String(req.params.id);
    const updateCategory = req.body;
    const result = yield repository.update(id, updateCategory);
    if (result) {
        return Response_custom_1.createResponse(res, `Updated ${id} Successfully`, result, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Update Opearion failed", undefined, 500);
    }
});
exports.getAllCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    const result = repository.find(query);
    if (result) {
        return Response_custom_1.createResponse(res, "Categories found", result, 200);
    }
    else {
        return Response_custom_1.createResponse(res, 'No Categories Available', undefined, 404);
    }
});
exports.getCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const result = yield repository.findOne({ _id: id });
    if (result) {
        return Response_custom_1.createResponse(res, "Category found", result, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Category not found", undefined, 404);
    }
});
exports.getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body;
    //console.log(query)
    const result = yield repository.find(query);
    // console.log(Boolean(result))
    if (result) {
        // console.log("done")
        return Response_custom_1.createResponse(res, "Categories found", result, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Category not found", undefined, 500);
    }
});
exports.getNCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body;
    // console.log(query)
    if (req.params.limit != "" && !isNaN(Number(req.params.limit))) {
        const limit = Number(req.params.limit);
        const result = yield repository.findN(query, limit);
        // console.log(result)
        if (result) {
            return Response_custom_1.createResponse(res, "Categories found", result, 200);
        }
        else {
            return Response_custom_1.createResponse(res, "Category not found", undefined, 500);
        }
    }
    else {
        return Response_custom_1.createResponse(res, "Category not found", undefined, 500);
    }
});
//# sourceMappingURL=Category.controller.js.map