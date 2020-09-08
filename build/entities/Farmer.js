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
exports.Farmer = void 0;
const typegoose_1 = require("@typegoose/typegoose");
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
class Farmer {
}
__decorate([
    typegoose_1.prop({ required: true }),
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
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Farmer.prototype, "organization", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Farmer.prototype, "phone", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Address)
], Farmer.prototype, "address", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Array)
], Farmer.prototype, "niche", void 0);
exports.Farmer = Farmer;
