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
exports.OrderModel = exports.Order = exports.OrderStatus = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const Customer_1 = require("./Customer");
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PLACED"] = "Placed";
    OrderStatus["APPROVED"] = "Approved";
    OrderStatus["DELIVERED"] = "Delivered";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
let Order = class Order {
    setDeliveryDetailsAndSave(deliveryInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            this.deliveryDetails = deliveryInfo;
            return yield this.save();
        });
    }
};
__decorate([
    typegoose_1.prop({ required: true, ref: 'Request', refType: typegoose_1.mongoose.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], Order.prototype, "request", void 0);
__decorate([
    typegoose_1.prop({ required: true, ref: 'Bid', refType: typegoose_1.mongoose.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], Order.prototype, "bid", void 0);
__decorate([
    typegoose_1.prop({ required: true, default: OrderStatus.PLACED, enum: OrderStatus }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    typegoose_1.prop({ required: true, default: false }),
    __metadata("design:type", Boolean)
], Order.prototype, "complete", void 0);
__decorate([
    typegoose_1.prop({ _id: false }),
    __metadata("design:type", Customer_1.DeliveryInfo)
], Order.prototype, "deliveryDetails", void 0);
Order = __decorate([
    typegoose_1.pre('find', function () {
        this.populate('request').populate('bid');
    })
], Order);
exports.Order = Order;
exports.OrderModel = typegoose_1.getModelForClass(Order);
//# sourceMappingURL=Order.js.map