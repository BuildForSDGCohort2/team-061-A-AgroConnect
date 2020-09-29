import {prop,Ref, getModelForClass, mongoose} from "@typegoose/typegoose"
import {Farmer} from './Farmer';
import {Category} from './Category';

enum StatusEnum{
    NONE = 'None',
    STOCKED = 'Stocked',
    AWAITING = 'Awaiting',
    UNFULFILLED = 'Unfulfilled'
}
class Restock{
    
    @prop()
    public harvestDate?:Date

    @prop()
    public expectedStock?:Number

    @prop({type: String, enum:StatusEnum, required:true, default:"None"})
    public status!:StatusEnum
}

export class Product{
    @prop({required:true, ref: 'Farmer',refType:mongoose.Schema.Types.ObjectId})
    farmerID!:Ref<Farmer>

    @prop({required:true})
    public name!:string

    @prop({required:true})
    public price!:Number

    @prop({required:true,min:1,default:1})
    public stock?:Number

    @prop({required:true,ref:'Category',refType:mongoose.Schema.Types.ObjectId})
    category!: Ref<Category>

    @prop()
    restockDetails?: Restock
}