import {prop} from "@typegoose/typegoose"
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses"

export class DeliveryInfo{

    @prop({required:true})
    public country!:string

    @prop({required:true})
    public state!:string
    
    @prop({required:true})
    public streetAddress!:string

    @prop({required:true})
    public phone!:string
    
    
}

export class Customer extends TimeStamps{

    @prop({required:true, unique:true})
    public email!:string;

    @prop({required:true, select:false})
    public password!:string;

    @prop({required:true})
    public firstname!: string;

    @prop({required:true})
    public lastname!: string;

    @prop({_id:false})
    public deliveryInfo?:DeliveryInfo
}