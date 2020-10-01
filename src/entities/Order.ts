import { prop, getModelForClass, mongoose, Ref, DocumentType, pre } from "@typegoose/typegoose"
import { Bid } from './Bid'
import { Request } from "./Request";
import { DeliveryInfo } from "./Customer"

export enum OrderStatus {
    PLACED = 'Placed',
    APPROVED = 'Approved',
    DELIVERED = 'Delivered'
}
@pre<Order>('find', function () {
    this.populate('request').populate('bid')
})
export class Order {

    @prop({ required: true, ref: () => Request, type: mongoose.Schema.Types.ObjectId })
    public request!: Ref<Request>

    @prop({ required: true, ref: () => Bid, type: mongoose.Schema.Types.ObjectId })
    public bid!: Ref<Bid>

    @prop({ required: true, default: OrderStatus.PLACED, enum: OrderStatus })
    public status!: OrderStatus

    @prop({ required: true, default: false })
    public complete!: boolean

    @prop({ _id: false })
    public deliveryDetails?: DeliveryInfo

    public async setDeliveryDetailsAndSave(this: DocumentType<Order>, deliveryInfo: DeliveryInfo) {
        this.deliveryDetails = deliveryInfo
        return await this.save()
    }
}

export let OrderModel = getModelForClass(Order)