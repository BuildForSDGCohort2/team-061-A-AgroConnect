import {OrderRepository} from "../repositories/Order.repository"
import {Request, Response} from "express"
import { Order } from "../entities/Order";
import {getModelForClass} from '@typegoose/typegoose'
import {createResponse} from "../Utils/Response.custom"

const repository = new OrderRepository(getModelForClass(Order))



export let deleteOrder = async (req:Request, res:Response) => {
    const id = req.params.id
    const result = await repository.delete(id)
    if (!result) return createResponse(res,'Bad request. Operation failed',undefined,500)
    return createResponse(res,"Order deleted",undefined,200)
}

export let updateOrder = async (req:Request, res:Response) => {
    const id = String(req.params.id)
    const update_order = req.body
    const result = await repository.update(id, update_order)

    //Object to update
    if (!result) return createResponse(res,'Update Operation failed',undefined,404)
    return createResponse(res,"Order Updated",result,200)
}


export let getAllOrder = async (req:Request, res:Response) => {
    const query = {}
    const result = repository.find(query)
    
    if (!result) return createResponse(res,'Orders not found',undefined,404)
    return createResponse(res,"Orders Found",result,200)
}



export let getOrderById = async (req:Request, res:Response) => {
    const id = req.query.id
    const result = await repository.findOne({_id: id})
    if (!result) return createResponse(res,'Orders not found',undefined,404)
    return createResponse(res,"Orders Found",result,200)
}

export let getOrders = async (req: Request, res: Response) => {
    const query = req.body
    //console.log(query)
    const result = await repository.find(query)
    // console.log(Boolean(result))
    if (result) {
        // console.log("done")
        return createResponse(res,"Orders found",result,200)
    } else {
        return createResponse(res, "Orders not found",undefined,404)
    }
}

export let getNOrders = async (req:Request,res:Response)=>{
    const query = req.body
    // console.log(query)
    if (req.params.limit !="" && !isNaN(Number(req.params.limit))) {
        const limit = Number(req.params.limit)
        const result = await repository.findN(query,limit)
        // console.log(result)
        if(result){
            return createResponse(res,"Orders found",result,200)
        } else {
            return createResponse(res, "Order not found",undefined,404)
        }
} else {
    return createResponse(res, "Bad request. Operation failed",undefined,500)
}

}