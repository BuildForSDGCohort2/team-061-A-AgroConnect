import {prop, getModelForClass, mongoose, Ref, DocumentType} from "@typegoose/typegoose"
import {Bid} from './Bid'
import { Request } from "./Request";
import {DeliveryInfo} from "./Customer"

enum OrderStatus{
    PLACED = 'Placed',
    APPROVED = 'Approved',
    DELIVERED = 'Delivered'
}

export class Order{
    
    @prop({required:true,ref:'Request',refType:mongoose.Schema.Types.ObjectId})
    public request!:Ref<Request>

    @prop({required:true,ref:'Bid',refType:mongoose.Schema.Types.ObjectId})
    public bid!:Ref<Bid>

    @prop({required:true,default:OrderStatus.PLACED,enum:OrderStatus})
    public status!:OrderStatus

    @prop({required:true,default:false})
    public complete!:boolean

    @prop({_id:false})
    public deliveryDetails?:DeliveryInfo

    public async setDeliveryDetailsAndSave(this: DocumentType<Order>,deliveryInfo:DeliveryInfo){
        this.deliveryDetails = deliveryInfo
        return await this.save()
    }
}