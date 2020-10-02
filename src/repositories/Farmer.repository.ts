import {BaseRepository} from "./base/Base.repository";
import { Farmer } from "../entities/Farmer";
import {getModelForClass, ReturnModelType} from "@typegoose/typegoose";

export class FarmerRepository extends BaseRepository<Farmer>{
    // model = getModelForClass(Farmer)

    //TODO: GET BY NICHE
    async getFarmersbyNiche(Niche:number[]):Promise<Farmer[]|null>{
        try {
            let result = await this.model.find({niche:{$in:Niche}}).populate("niche","name")
            //  result = result.where("niche").in(Niche)
            // const result = await this.model.find()
            return result
        } catch (error) {
            // console.log(error)
            return null
        }
    }
    //TODO: GET BY COUNTRY
    async getFarmersinCountry(country:string):Promise<Farmer[]|null>{
        try {
            const result = await this.model.find({"address.country":country})
            return result    
        } catch (error) {
            return null
        }
        
    }
    //TODO: GET BY COUNTRY AND STATE
    async getFarmersinCountryandState(country:string, state:string):Promise<Farmer[]|null>{
        try {
            const result = await this.model.find({"address.country":country,"address.state":state})
            return result    
        } catch (error) {
            return null
        }
        
    }
    //TODO: FIND/Search BY ORG
    async searchByOrganization(organization:string):Promise<Farmer[]|null>{
       try {
           let regexp = `.*${organization}.*`
           let exp = new RegExp(regexp,'i')
        const result = await this.model.find({organization:exp})
        // await this.model.aggregate([{$match:{$expr:{$gt:[{$indexOfCP:["$organization",organization]},-1]}}},{$project:{password:0}}])
        return result
       } catch (error) {
        //    console.log(error)
           return null
       }
        
    }

    //TODO: Rate a farmer
    async rateFarmer(id:string,rating:number):Promise<any|null>{
        try {
            const result = await this.model.findById(id)
            if(result){
                result.rating.score+=rating;
                result.rating.scored+=1
                const newresult = await result.save()
                return newresult.rating
            }else{
                return null
            }    
        } catch (error) {
            return null
        }
        
    }
}