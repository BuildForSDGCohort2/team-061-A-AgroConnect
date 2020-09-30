import {BaseRepository} from "./base/Base.repository"
import { Request } from "../entities/Request";
import {getModelForClass} from '@typegoose/typegoose';

export class RequestRepository extends BaseRepository<Request>{
   
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