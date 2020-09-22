import {BaseRepository} from "./base/Base.repository";
import { Farmer } from "../entities/Farmer";
import {getModelForClass} from "@typegoose/typegoose";

export class FarmerRepository extends BaseRepository<Farmer>{
    

    //TODO: GET BY NICHE

    //TODO: GET BY COUNTRY
    async getFarmersinCountry(country:string):Promise<Farmer[]>{
        const result = await this.model.find({"address.country":country})
        return result
    }
    //TODO: GET BY COUNTRY AND STATE
    async getFarmersinCountryandState(country:string, state:string):Promise<Farmer[]>{
        const result = await this.model.find({"address.country":country,"address.state":state})
        return result
    }
    //TODO: FIND/Search BY ORG
    async searchByOrganization(organization:string):Promise<Farmer[]>{
       const result = await this.model.find({organization:organization})
       return result
    }
}