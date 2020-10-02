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
exports.FarmerModel = exports.Farmer = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const Tag_1 = require("./Tag");
class Address {
}
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Address.prototype, "country", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Address.prototype, "state", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Address.prototype, "streetAddress", void 0);
class Rating {
}
__decorate([
    typegoose_1.prop({ required: true, default: 0 }),
    __metadata("design:type", Number)
], Rating.prototype, "score", void 0);
__decorate([
    typegoose_1.prop({ required: true, default: 0 }),
    __metadata("design:type", Number)
], Rating.prototype, "scored", void 0);
// @pre<Farmer>('find',function(){
//     this.populate("niche","name")
// })
class Farmer {
}
__decorate([
    typegoose_1.prop({ required: true, unique: true }),
    __metadata("design:type", String)
], Farmer.prototype, "email", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Farmer.prototype, "password", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Farmer.prototype, "firstname", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Farmer.prototype, "lastname", void 0);
__decorate([
    typegoose_1.prop({ required: true, unique: true }),
    __metadata("design:type", String)
], Farmer.prototype, "organization", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Farmer.prototype, "phone", void 0);
__decorate([
    typegoose_1.prop({ required: true, _id: false }),
    __metadata("design:type", Address)
], Farmer.prototype, "address", void 0);
__decorate([
    typegoose_1.prop({ required: true, ref: () => Tag_1.Tag, type: typegoose_1.mongoose.Schema.Types.Number }),
    __metadata("design:type", Array)
], Farmer.prototype, "niche", void 0);
__decorate([
    typegoose_1.prop({ _id: false, default: { score: 0, scored: 0 } }),
    __metadata("design:type", Rating)
], Farmer.prototype, "rating", void 0);
exports.Farmer = Farmer;
exports.FarmerModel = typegoose_1.getModelForClass(Farmer);
//# sourceMappingURL=Farmer.js.map