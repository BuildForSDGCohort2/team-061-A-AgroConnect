import {prop, getModelForClass,pre, mongoose, Ref} from "@typegoose/typegoose"
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
@pre<Request>('save',function (){
    if (this.type == EnumType.SINGLE) {
        this.acceptedBid = true
    }
})
export class Request{

    @prop({required:true, ref:'Customer',refType:mongoose.Schema.Types.ObjectId})
    public customer!: Ref<Customer>

    @prop({required:true,type:Requestproduct})
    public products!: Requestproduct[]

    @prop({type:Number,ref:'Tag',refType:mongoose.Schema.Types.Number})
    public tags?: Ref<Tag>[]

    @prop({maxlength:123})
    public title?:string

    @prop()
    public description?:string

    @prop({default:false,required:true})
    acceptedBid!:boolean

    @prop({required:true,enum:EnumType})
    public type!:EnumType
}

export let RequestModel = getModelForClass(Request)