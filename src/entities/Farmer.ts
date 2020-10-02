import { prop, getModelForClass, mongoose, Ref, pre } from "@typegoose/typegoose"
import { Tag } from './Tag'

class Address {
    @prop({ required: true })
    public country!: string;

    @prop({ required: true })
    public state!: string;

    @prop({ required: true })
    public streetAddress!: string;
}
class Rating {
    @prop({ required: true, default: 0 })
    public score!: number
    @prop({ required: true, default: 0 })
    public scored!: number
}
// @pre<Farmer>('find',function(){
//     this.populate("niche","name")
// })
export class Farmer {

    @prop({ required: true, unique: true })
    public email!: string;

    @prop({ required: true })
    public password!: string;

    @prop({ required: true })
    public firstname!: string;

    @prop({ required: true })
    public lastname!: string;

    @prop({ required: true, unique: true })
    public organization!: string;

    @prop({ required: true })
    public phone!: string;

    @prop({ required: true, _id: false })
    public address!: Address;

    @prop({ required: true, ref: () => Tag, type: mongoose.Schema.Types.Number })
    public niche!: Ref<Tag>[]

    @prop({ _id: false, default: { score: 0, scored: 0 } })
    public rating!: Rating
}

export let FarmerModel = getModelForClass(Farmer)






