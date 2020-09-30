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
exports.BidModel = exports.Bid = exports.EnumBidStatus = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
class PriceItem {
}
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], PriceItem.prototype, "product", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Number)
], PriceItem.prototype, "price", void 0);
var EnumBidStatus;
(function (EnumBidStatus) {
    EnumBidStatus["ACCEPTED"] = "Accepted";
    EnumBidStatus["REJECTED"] = "Rejected";
    EnumBidStatus["AWAITING"] = "Awaiting";
})(EnumBidStatus = exports.EnumBidStatus || (exports.EnumBidStatus = {}));
let Bid = class Bid extends defaultClasses_1.TimeStamps {
};
__decorate([
    typegoose_1.prop({ required: true, ref: 'Farmer', refType: typegoose_1.mongoose.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], Bid.prototype, "farmer", void 0);
__decorate([
    typegoose_1.prop({ required: true, type: PriceItem, _id: false }),
    __metadata("design:type", Array)
], Bid.prototype, "priceList", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Bid.prototype, "total", void 0);
__decorate([
    typegoose_1.prop({ required: true, default: EnumBidStatus.AWAITING, enum: EnumBidStatus }),
    __metadata("design:type", String)
], Bid.prototype, "status", void 0);
__decorate([
    typegoose_1.prop({ required: true, ref: 'Request', refType: typegoose_1.mongoose.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], Bid.prototype, "request", void 0);
Bid = __decorate([
    typegoose_1.pre('save', function () {
        let sum = 0;
        this.priceList.forEach((val, index, array) => sum = sum + val.price);
        this.total = sum;
    })
], Bid);
exports.Bid = Bid;
exports.BidModel = typegoose_1.getModelForClass(Bid);
//# sourceMappingURL=Bid.js.map
