"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag_Router = void 0;
const express_1 = __importDefault(require("express"));
const Response_custom_1 = require("../Utils/Response.custom");
exports.Tag_Router = express_1.default.Router();
exports.Tag_Router.all("/info", (req, res) => {
    return Response_custom_1.createResponse(res, "CRUD API For handling Tags for Reuest and niche identification", {}, 200);
});
//# sourceMappingURL=tag.routes.js.map
