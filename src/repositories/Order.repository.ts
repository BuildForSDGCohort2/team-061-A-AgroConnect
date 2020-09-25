import {BaseRepository} from "./base/Base.repository"
import { Order, OrderStatus } from "../entities/Order";
import {Customer} from "../entities/Customer"
import {Bid, EnumBidStatus} from "../entities/Bid";
import {Request} from "../entities/Request";
import { getModelForClass } from "@typegoose/typegoose";

export class OrderRepository extends BaseRepository<Order>{
    model = getModelForClass(Order)
    //TODO GET ORDER BY FARMER
    async getOrderByFarmer(farmerid:any):Promise<Order[]>{
       const result = await this.model.find({"bid.farmer":farmerid})
       return result
    }
    //TODO GET ORDER BY CUSTOMER
    async getOrderByCustomer(customerid:any):Promise<Order[]>{
        const result = await this.model.find({"request.customer":customerid})
        return result
     }
    //TODO UPDATE ORDER STATUS
    async updateStatus(id:any,status:string):Promise<Order|null>{
        const order  = await this.model.findById(id)
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

    }
    //TODO CREATE ORDER FOR BULK
    async createBulkOrder(order:Order,customerid:any):Promise<Order|null>{
        const deliveryInfo = await (getModelForClass(Customer)).findById(customerid,{deliveryInfo:1})
        if (deliveryInfo) {
            if (deliveryInfo.deliveryInfo) {
                const orderid = await this.create(order)
                const createdorder = await this.model.findById(orderid)
                const result = await createdorder?.setDeliveryDetailsAndSave(deliveryInfo.deliveryInfo)
                if (result) {
                    return result
                }
                return null
            }
            return null
        }
        return null
    }
    //TODO CREATE ORDER FOR SINGLE
    async createSingleOrder(request:any,bid:any,customerid:any):Promise<Order|null>{
        let deliveryInfo;
        const newrequest = await (getModelForClass(Request)).create(request)
        const bidobj = bid
        bidobj.request = newrequest._id
        bidobj.status = EnumBidStatus.ACCEPTED
        const newbid = await (getModelForClass(Bid)).create(bidobj)
        const customer = await (getModelForClass(Customer)).findById(customerid,{deliveryInfo:1})
        if (customer) {
            deliveryInfo = customer.deliveryInfo
            if (deliveryInfo) {
                const order = await this.model.create({request:newrequest._id,bid:newbid._id,status:OrderStatus.PLACED,complete:false})
                const result = await order.setDeliveryDetailsAndSave(deliveryInfo)
                if (result) {
                    return result
                }
                return null
            }
            return null
        }
        return null
    }
}