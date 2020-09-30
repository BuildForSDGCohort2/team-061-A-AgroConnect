import {BaseRepository} from "./base/Base.repository"
import {Bid} from '../entities/Bid'
import { getModelForClass } from '@typegoose/typegoose';

export class BidRepository extends BaseRepository<Bid>{

    //  model = getModelForClass(Bid)
    
    //TODO GET BIDS BY FARMER returnType = Bid[]
    //TODO GET BIDS BY REQUEST returnType = Bid[]
    //*SORT IN ACCEDING ORDER OF STATUS (add the .sort method after every query, sha text me if you dont understand)
    //* async functionName(param1:type1,...,paramN:typeN):Promise<returnType>{}

    async getBidsByFarmer(Farmer:any):Promise<Bid[]> {
        const result = await this.model.find({farmer: Farmer}).populate("farmer").sort({farmer: 1})
        return result
    }

    async getBidsByRequest(Request:any):Promise<Bid[]>{
        const result = await this.model.find({request: Request}).populate("request").sort({request: 1})
        return result
    } 
}
