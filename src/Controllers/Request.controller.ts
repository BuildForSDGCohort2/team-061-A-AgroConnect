import {RequestRepository} from "../repositories/Request.repository"
import {Request, Response} from "express"
import * as UserRequest from "../entities/Request";
import {getModelForClass} from '@typegoose/typegoose'
import {createResponse} from "../Utils/Response.custom"

const repository = new RequestRepository(getModelForClass(Request))


export let createRequest = async (req: Request, res: Response) => {
    const Request = req.body
    const result = await repository.create(Request)
    if (result) {
        const newRequest = await repository.findOne({ _id: result })
        return createResponse(res, "Request created", newRequest, 200)
    } else {
        return createResponse(res, "Error creating Request in db", undefined, 500)
    }
}



export let deleteRequest = async (req:Request, res:Response) => {
    const id = req.params.id
    const result = await repository.delete(id)
    if (!result) return createResponse(res,'Bad request. Operation failed',undefined,500)
    return createResponse(res,"Request deleted",result,200)
}

export let updateRequest = async (req:Request, res:Response) => {
    const id = String(req.params.id)
    const update_request = req.body
    const result = await repository.update(id, update_request)

    //Object to update
    if (!result) return createResponse(res,'Bad request. Operation failed',undefined,500)
    return createResponse(res,"Request Updated",result,200)
}


export let getAllRequest = async (req:Request, res:Response) => {
    const query = {}
    const result = repository.find(query)
    
    if (!result) return createResponse(res,'Bad request. Operation failed',undefined,500)
    return createResponse(res,"Successful",result,200)
}



export let getRequestById = async (req:Request, res:Response) => {
    const id = req.query.id
    const result = await repository.findOne({_id: id})
    if (!result) return createResponse(res,'Bad request. Operation failed',undefined,500)
    return createResponse(res,"Successful",result,200)
}

export let getRequests = async (req: Request, res: Response) => {
    const query = req.body
    //console.log(query)
    const result = await repository.find(query)
    console.log(Boolean(result))
    if (result) {
        console.log("done")
        return createResponse(res,"Successful",result,200)
    } else {
        return createResponse(res, "Bad request. Operation failed",undefined,500)
    }
}

export let getNRequests = async (req:Request,res:Response)=>{
    const query = req.body
    // console.log(query)
    if (req.params.limit !="") {
        const limit = Number(req.params.limit)
        const result = await repository.findN(query,limit)
        console.log(result)
        if(result){
            return createResponse(res,"Successful",result,200)
        } else {
            return createResponse(res, "Request not found",undefined,404)
        }
} else {
    return createResponse(res, "Bad request. Operation failed",undefined,500)
}

}