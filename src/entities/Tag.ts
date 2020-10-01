import { AutoIncrementID } from "@typegoose/auto-increment";
import {prop, getModelForClass, mongoose, Ref, plugin} from "@typegoose/typegoose"
/**
 * Use for niche i.e, more specific than
 * category.
 * e.g orange,apple,cow,pig,fish,etc
 */

@plugin(AutoIncrementID,{})
export class Tag{
    @prop({required:true,min:1})
    public _id!:number;

    @prop({required:true})
    public name!:string
}

export let TagModel = getModelForClass(Tag)