import {prop, getModelForClass} from "@typegoose/typegoose"


class Address{
    @prop({required:true})
    public country!:string;

    @prop({required:true})
    public state!: string;

    @prop({required:true})
    public streetAddress!:string;
}
export class Farmer{
    @prop({required:true})
    email!:string;

    @prop({required:true})
    password!:string;

    @prop({required:true})
    firstname!: string;

    @prop({required:true})
    lastname!: string;

    @prop({required:true})
    organization!: string;

    @prop({required:true})
    phone!: string;
    @prop({required:true})
    address!:Address;

    @prop({required:true})
    niche!:  []
}






    
