"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagModel = exports.Tag = void 0;
const typegoose_1 = require("@typegoose/typegoose");
/**
 * Use for niche i.e, more specific than
 * category.
 * e.g orange,apple,cow,pig,fish,etc
 */
// @plugin(AutoIncrementID,{})
class Tag {
}
__decorate([
    typegoose_1.prop({ required: true, min: 1 }),
    __metadata("design:type", Number)
], Tag.prototype, "_id", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Tag.prototype, "name", void 0);
exports.Tag = Tag;
exports.TagModel = typegoose_1.getModelForClass(Tag);
//# sourceMappingURL=Tag.js.map