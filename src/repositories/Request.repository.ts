import {BaseRepository} from "./base/Base.repository"
import { Request } from "../entities/Request";
import {getModelForClass} from '@typegoose/typegoose';

export class RequestRepository extends BaseRepository<Request>{
    //TODO ACCEPT BID returnType = Request
    //TODO GET ALL OPEN BIDS (BULK) returnType = Request[]
    //TODO GET BY TAGS (OPEN BULK)  returnType = Request[]
    //* async functionName(param1:type1,...,paramN:typeN):Promise<returnType>{}
   
        // model = getModelForClass(Request);
        
        async acceptedBid(requestid:any):Promise<Request|null>{
            try {
                const result = await this.model.findByIdAndUpdate(requestid,{acceptedBid:true},{new:true})
                return result   
            } catch (error) {
                return null
            }
        }
        
        async getOpenRequests():Promise<Request[]|null>{
            try {
                const result = await this.model.find({acceptedBid:false})
                return result    
            } catch (error) {
                return null
            }
            
        }

        async getRequestByTags(tags:any[]):Promise<Request[]|null> {
            try {
                const result = await this.model.find({tags:{$in:tags},acceptedBid:false})
                return result    
            } catch (error) {
                return null
            }
            
        }
    
        async getRequestByCustomer(Customer:any):Promise<Request[]>{
            const result = await this.model.find({customer: Customer})
            return result
        } 
    
}