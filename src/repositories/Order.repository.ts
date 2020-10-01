import { BaseRepository } from "./base/Base.repository"
import { Order, OrderStatus } from "../entities/Order";
import { Customer, CustomerModel } from "../entities/Customer"
import { Bid, EnumBidStatus, BidModel } from "../entities/Bid";
import { Request, RequestModel } from "../entities/Request";
import { getModelForClass } from "@typegoose/typegoose";

export class OrderRepository extends BaseRepository<Order>{
    // model = getModelForClass(Order)
    //TODO GET ORDER BY FARMER
    async getOrderByFarmer(farmerid: any): Promise<Order[] | null> {
        try {
            const result = await this.model.find({ "bid.farmer": farmerid })
            return result
        } catch (error) {
            return null
        }

    }
    //TODO GET ORDER BY CUSTOMER
    async getOrderByCustomer(customerid: any): Promise<Order[] | null> {
        try {
            const result = await this.model.find({ "request.customer": customerid })
            return result
        } catch (error) {
            return null
        }

    }
    //TODO UPDATE ORDER STATUS
    async updateStatus(id: any, status: string): Promise<Order | null> {
        try {
            const order = await this.model.findById(id)
            if (order) {
                switch (status.toLowerCase()) {
                    case 'placed':
                        order.status = OrderStatus.PLACED
                        break;
                    case 'approved':
                        order.status = OrderStatus.APPROVED
                        break;
                    case 'delivered':
                        order.status = OrderStatus.DELIVERED
                        break;
                    default:
                        return null
                }
                const result = await order.save()
                return result
            }
            return null

        } catch (error) {
            return null
        }
    }
    //TODO CREATE ORDER FOR BULK
    async createBulkOrder(order: any, customerid: any): Promise<Order | null> {
        try {
            const deliveryInfo = await CustomerModel.findById(customerid, { deliveryInfo: 1 })
            if (deliveryInfo) {
                if (deliveryInfo.deliveryInfo) {
                    const request = await RequestModel.findByIdAndUpdate(order.request, { acceptedBid: true }, { new: true })
                    const bid = await BidModel.findByIdAndUpdate(order.bid, { status: EnumBidStatus.ACCEPTED }, { new: true })
                    let newOrder = order
                    if (request && bid) {
                        newOrder.request = request._id
                        newOrder.bid = bid._id
                        const createdorder = await this.model.create(newOrder)
                        const result = await createdorder.setDeliveryDetailsAndSave(deliveryInfo.deliveryInfo)
                        if (result) {
                            return result
                        }
                        return null
                    }
                    return null
                }
                return null
            }
            return null
        } catch (error) {
            return null
        }
    }
    //TODO CREATE ORDER FOR SINGLE
    async createSingleOrder(request: any, bid: any, customerid: any): Promise<Order | null> {
        try {
            let deliveryInfo;
            const newrequest = await RequestModel.create(request)
            const bidobj = bid
            bidobj.request = newrequest._id
            bidobj.status = EnumBidStatus.ACCEPTED
            const newbid = await BidModel.create(bidobj)
            const customer = await CustomerModel.findById(customerid, { deliveryInfo: 1 })
            if (customer) {
                deliveryInfo = customer.deliveryInfo
                if (deliveryInfo) {
                    const order = await this.model.create({ request: newrequest._id, bid: newbid._id, status: OrderStatus.PLACED, complete: false })
                    const result = await order.setDeliveryDetailsAndSave(deliveryInfo)
                    if (result) {
                        return result
                    }
                    return null
                }
                return null
            }
            return null
        } catch (error) {
            return null
        }
    }
}