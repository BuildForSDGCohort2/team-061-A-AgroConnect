import {prop,Ref, getModelForClass, mongoose} from "@typegoose/typegoose"
import {Farmer} from './Farmer';
import {Category} from './Category';
export enum StatusEnum{
    NONE = 'None',
    STOCKED = 'Stocked',
    AWAITING = 'Awaiting',
    UNFULFILLED = 'Unfulfilled'
}
class Restock{
    
    @prop()
    public harvestDate?:Date

    @prop()
    public expectedStock?:number

    @prop({type: String, enum:StatusEnum, required:true, default:"None"})
    public status!:StatusEnum
}

export class Product{
    @prop({required:true, ref:()=> Farmer,type:mongoose.Schema.Types.ObjectId})
    farmerID!:Ref<Farmer>

    @prop({required:true})
    public name!:string

    @prop({required:true})
    public price!:number

    @prop({required:true,min:1,default:1})
    public stock?:number

    @prop({required:true,ref:()=>Category,type:mongoose.Schema.Types.ObjectId})
    category!: Ref<Category>

    @prop({_id:false})
    restockDetails?: Restock
}

export let ProductModel = getModelForClass(Product)