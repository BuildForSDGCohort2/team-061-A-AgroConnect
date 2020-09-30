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
exports.RequestModel = exports.Request = void 0;
const typegoose_1 = require("@typegoose/typegoose");
class Requestproduct {
}
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Requestproduct.prototype, "product", void 0);
__decorate([
    typegoose_1.prop({ required: true, min: 1, default: 1 }),
    __metadata("design:type", Number)
], Requestproduct.prototype, "quantity", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Requestproduct.prototype, "description", void 0);
var EnumType;
(function (EnumType) {
    EnumType["BULK"] = "Bulk";
    EnumType["SINGLE"] = "Single";
})(EnumType || (EnumType = {}));
let Request = class Request {
};
__decorate([
    typegoose_1.prop({ required: true, ref: 'Customer', refType: typegoose_1.mongoose.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], Request.prototype, "customer", void 0);
__decorate([
    typegoose_1.prop({ required: true, type: Requestproduct }),
    __metadata("design:type", Array)
], Request.prototype, "products", void 0);
__decorate([
    typegoose_1.prop({ type: Number, ref: 'Tag', refType: typegoose_1.mongoose.Schema.Types.Number }),
    __metadata("design:type", Array)
], Request.prototype, "tags", void 0);
__decorate([
    typegoose_1.prop({ maxlength: 123 }),
    __metadata("design:type", String)
], Request.prototype, "title", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Request.prototype, "description", void 0);
__decorate([
    typegoose_1.prop({ default: false, required: true }),
    __metadata("design:type", Boolean)
], Request.prototype, "acceptedBid", void 0);
__decorate([
    typegoose_1.prop({ required: true, enum: EnumType }),
    __metadata("design:type", String)
], Request.prototype, "type", void 0);
Request = __decorate([
    typegoose_1.pre('save', function () {
        if (this.type == EnumType.SINGLE) {
            this.acceptedBid = true;
        }
    })
], Request);
exports.Request = Request;
exports.RequestModel = typegoose_1.getModelForClass(Request);
//# sourceMappingURL=Request.js.map
