import {prop, getModelForClass, mongoose, Ref, pre} from "@typegoose/typegoose"
import {Farmer} from './Farmer'
import {Request} from './Request'
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses"

class PriceItem{

    @prop({required:true})
    public product!:string

    @prop({required:true})
    public price!:number
}
export enum EnumBidStatus{
    ACCEPTED = 'Accepted',
    REJECTED = 'Rejected',
    AWAITING = "Awaiting"
}

@pre<Bid>('save',function () {
    let sum =0 
    this.priceList.forEach((val,index,array)=>sum=sum+val.price)
    this.total = sum
})
export class Bid extends TimeStamps{
    @prop({required:true,ref:'Farmer',refType:mongoose.Schema.Types.ObjectId})
    public farmer!:Ref<Farmer>

    @prop({required:true,type:PriceItem,_id:false})
    public priceList!:PriceItem[]

    @prop()
    public total?:number

    @prop({required:true,default:EnumBidStatus.AWAITING,enum:EnumBidStatus})
    public status!:EnumBidStatus

    @prop({required:true,ref:'Request',refType:mongoose.Schema.Types.ObjectId})
    public request!:Ref<Request>
}

export let BidModel = getModelForClass(Bid)
