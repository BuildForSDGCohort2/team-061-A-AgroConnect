import {BaseRepository} from "./base/Base.repository"
import { Product, StatusEnum } from "../entities/Product";
import { getModelForClass } from "@typegoose/typegoose";

export class ProductRepository extends BaseRepository<Product>{
 
    model = getModelForClass(Product)

    async getProductsByFarmer(id:any):Promise<Product[]> {
        const result = await this.model.find({farmerID:id})//.populate("category","name")
        return result
    }

    async getProductsByCategory (Category:string[]):Promise<Product[]>{
        const result = await this.model.find().populate("category","name").in("category.name",Category)
        return result
    }
    
    async restockProducts(id:any,stock:number,harvest:Date):Promise<Product|null>{
        const product = await this.model.findById(id)
        if (product) {
            if (product.restockDetails) {
                if (product.restockDetails.status == StatusEnum.AWAITING){
                    product.restockDetails.expectedStock= Number(product.restockDetails.expectedStock)+stock
                    product.restockDetails.harvestDate = harvest
                }else{
                    product.restockDetails.expectedStock= stock
                    product.restockDetails.harvestDate = harvest
                    product.restockDetails.status = StatusEnum.AWAITING
                }
            }else{
                product.restockDetails = {harvestDate:harvest,expectedStock:stock,status:StatusEnum.AWAITING}
            }
            const result = await product.save()
            return result   
        }
        return null
    }

    async updateRestockStatus(id:any,status:string):Promise<Product|null>{
        const product = await this.model.findById(id)
        if (product) {
            if (product.restockDetails) {
                switch (status.toLowerCase()) {
                    case "awaiting":
                        product.restockDetails.status = StatusEnum.AWAITING
                        break;
                    case "stocked":
                        if(product.restockDetails.expectedStock){
                            product.restockDetails.status = StatusEnum.STOCKED
                            if(product.stock){
                                product.stock+=product.restockDetails.expectedStock
                            }else{
                                product.stock = product.restockDetails.expectedStock
                            }   
                        } 
                        break;
                    case "unfulfilled":
                        product.restockDetails.status = StatusEnum.UNFULFILLED
                        break;
                    default:
                        product.restockDetails.status = StatusEnum.NONE
                        break;
                }
                const result = await product.save()
                return result
            }
            return null
        }
        return null
    }
}