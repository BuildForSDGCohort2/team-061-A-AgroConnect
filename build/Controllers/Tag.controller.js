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
exports.getNTags = exports.getTags = exports.getTagById = exports.getAllTag = exports.updateTag = exports.deleteTag = exports.createTag = void 0;
const Tag_repository_1 = require("../repositories/Tag.repository");
const Tag_1 = require("../entities/Tag");
const Response_custom_1 = require("../Utils/Response.custom");
const repository = new Tag_repository_1.TagRepository(Tag_1.TagModel);
exports.createTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Tag = req.body;
    const result = yield repository.create(Tag);
    if (!isNaN(Number(result))) {
        const newTag = yield repository.findOne({ _id: result });
        return Response_custom_1.createResponse(res, "Tag created", newTag, 200);
    }
    else {
        return Response_custom_1.createResponse(res, "Error creating Tag in db", undefined, 500);
    }
});
exports.deleteTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield repository.delete(id);
    if (result) {
        return Response_custom_1.createResponse(res, `Deleted ${id} Successfully`, undefined, 200);
    }
    return Response_custom_1.createResponse(res, "Delete Operation Failed", undefined, 500);
});
exports.updateTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = String(req.query.id);
    const update_tag = req.body;
    const result = yield repository.update(id, update_tag);
    if (result) {
        return Response_custom_1.createResponse(res, `Updated ${id} Successfully`, undefined, 200);
    }
    return Response_custom_1.createResponse(res, "Update Operation Failed", undefined, 500);
});
exports.getAllTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    const result = yield repository.find(query);
    if (result) {
        return Response_custom_1.createResponse(res, "Tags found", result, 200);
    }
    return Response_custom_1.createResponse(res, "Tags not found", undefined, 404);
});
exports.getTagById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const result = yield repository.findOne({ _id: id });
    if (result) {
        return Response_custom_1.createResponse(res, "Tag found", result, 200);
    }
    return Response_custom_1.createResponse(res, "Tag not found", undefined, 404);
});
exports.getTags = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body;
    //console.log(query)
    const result = yield repository.find(query);
    // console.log(Boolean(result))
    if (result) {
        if (result.length > 0) {
            return Response_custom_1.createResponse(res, "Tags found", result, 200);
        }
        else {
            return Response_custom_1.createResponse(res, "Tags not found", undefined, 404);
        }
    }
    return Response_custom_1.createResponse(res, "Bad request. Operation failed", undefined, 500);
});
exports.getNTags = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body;
    // console.log(query)
    if (req.params.limit != "") {
        const limit = Number(req.params.limit);
        const result = yield repository.findN(query, limit);
        // console.log(result)
        if (result) {
            if (result.length > 0) {
                return Response_custom_1.createResponse(res, "Tags found", result, 200);
            }
            else {
                return Response_custom_1.createResponse(res, "Tags not found", undefined, 404);
            }
        }
        return Response_custom_1.createResponse(res, "Bad request. Operation failed", undefined, 500);
    }
    else {
        return Response_custom_1.createResponse(res, "Parameter not found", undefined, 500);
    }
});
//# sourceMappingURL=Tag.controller.js.map