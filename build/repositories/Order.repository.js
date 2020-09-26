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
exports.OrderRepository = void 0;
const Base_repository_1 = require("./base/Base.repository");
const Order_1 = require("../entities/Order");
const Customer_1 = require("../entities/Customer");
const Bid_1 = require("../entities/Bid");
const Request_1 = require("../entities/Request");
const typegoose_1 = require("@typegoose/typegoose");
class OrderRepository extends Base_repository_1.BaseRepository {
    constructor() {
        super(...arguments);
        this.model = typegoose_1.getModelForClass(Order_1.Order);
    }
    //TODO GET ORDER BY FARMER
    getOrderByFarmer(farmerid) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.find({ "bid.farmer": farmerid });
            return result;
        });
    }
    //TODO GET ORDER BY CUSTOMER
    getOrderByCustomer(customerid) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.find({ "request.customer": customerid });
            return result;
        });
    }
    //TODO UPDATE ORDER STATUS
    updateStatus(id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield this.model.findById(id);
            if (order) {
                switch (status.toLowerCase()) {
                    case 'placed':
                        order.status = Order_1.OrderStatus.PLACED;
                        break;
                    case 'approved':
                        order.status = Order_1.OrderStatus.APPROVED;
                        break;
                    case 'delivered':
                        order.status = Order_1.OrderStatus.DELIVERED;
                        break;
                    default:
                        return null;
                }
                const result = yield order.save();
                return result;
            }
            return null;
        });
    }
    //TODO CREATE ORDER FOR BULK
    createBulkOrder(order, customerid) {
        return __awaiter(this, void 0, void 0, function* () {
            const deliveryInfo = yield (typegoose_1.getModelForClass(Customer_1.Customer)).findById(customerid, { deliveryInfo: 1 });
            if (deliveryInfo) {
                if (deliveryInfo.deliveryInfo) {
                    const orderid = yield this.create(order);
                    const createdorder = yield this.model.findById(orderid);
                    const result = yield (createdorder === null || createdorder === void 0 ? void 0 : createdorder.setDeliveryDetailsAndSave(deliveryInfo.deliveryInfo));
                    if (result) {
                        return result;
                    }
                    return null;
                }
                return null;
            }
            return null;
        });
    }
    //TODO CREATE ORDER FOR SINGLE
    createSingleOrder(request, bid, customerid) {
        return __awaiter(this, void 0, void 0, function* () {
            let deliveryInfo;
            const newrequest = yield (typegoose_1.getModelForClass(Request_1.Request)).create(request);
            const bidobj = bid;
            bidobj.request = newrequest._id;
            bidobj.status = Bid_1.EnumBidStatus.ACCEPTED;
            const newbid = yield (typegoose_1.getModelForClass(Bid_1.Bid)).create(bidobj);
            const customer = yield (typegoose_1.getModelForClass(Customer_1.Customer)).findById(customerid, { deliveryInfo: 1 });
            if (customer) {
                deliveryInfo = customer.deliveryInfo;
                if (deliveryInfo) {
                    const order = yield this.model.create({ request: newrequest._id, bid: newbid._id, status: Order_1.OrderStatus.PLACED, complete: false });
                    const result = yield order.setDeliveryDetailsAndSave(deliveryInfo);
                    if (result) {
                        return result;
                    }
                    return null;
                }
                return null;
            }
            return null;
        });
    }
}
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=Order.repository.js.map