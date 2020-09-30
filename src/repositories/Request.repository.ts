import {BaseRepository} from "./base/Base.repository"
import { Request } from "../entities/Request";
import {getModelForClass} from '@typegoose/typegoose';

export class RequestRepository extends BaseRepository<Request>{
    //TODO ACCEPT BID returnType = Request
    //TODO GET ALL OPEN BIDS (BULK) returnType = Request[]
    //TODO GET BY TAGS (OPEN BULK)  returnType = Request[]
    //* async functionName(param1:type1,...,paramN:typeN):Promise<returnType>{}
   
        // model = getModelForClass(Request);
        
        
        async getRequestByProduct(Product:any):Promise<Request[]> {
            const result = await this.model.find({products: Product}).populate("products").sort({products: 1})
            return result
        }
    
        async getRequestByCustomer(Customer:any):Promise<Request[]>{
            const result = await this.model.find({customer: Customer}).populate("customer").sort({customer: 1})
            return result
        } 
    
}