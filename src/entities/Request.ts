import {prop, getModelForClass, mongoose, Ref} from "@typegoose/typegoose"
import {Customer} from './Customer'
import {Farmer} from './Farmer'
import {Tag} from './Tag'
class Requestproduct{

    @prop({required:true})
    public product!:string

    @prop({required:true,min:1,default:1})
    public quantity!:number

    @prop()
    public description?:string
}
enum EnumType{
    BULK = 'Bulk',
    SINGLE = 'Single'
}
export class Request{

    @prop({required:true, ref:'Customer',refType:mongoose.Schema.Types.ObjectId})
    public customer!: Ref<Customer>

    @prop({required:true,type:Requestproduct})
    public products!: Requestproduct[]

    @prop({required:true,type:Number,ref:'Tag',refType:mongoose.Schema.Types.Number})
    public tags!: Ref<Tag>[]

    @prop({required:true,maxlength:123})
    public title!:string

    @prop()
    public description?:string

    @prop({default:false,required:true})
    acceptedBid!:boolean

    @prop({required:true,enum:EnumType})
    public type!:EnumType
}