import {prop, getModelForClass} from "@typegoose/typegoose"
/*  
 * use this for arranging products
 * based on the type of product
 * e.g fruit,cashcrop,herbivore,bird,
 * etc
*/
export class Category{
    @prop({required:true})
    public name!:string
}

export let CategoryModel = getModelForClass(Category)