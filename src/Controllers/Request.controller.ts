import { RequestRepository } from "../repositories/Request.repository"
import { Request, Response } from "express"
import {RequestModel} from "../entities/Request";
import { getModelForClass } from '@typegoose/typegoose'
import { createResponse } from "../Utils/Response.custom"

const repository = new RequestRepository(RequestModel)


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

export let deleteRequest = async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await repository.delete(id)
    if (!result) return createResponse(res, 'Delete Operation Failed', undefined, 500)
    return createResponse(res, "Request deleted", undefined, 200)
}

export let updateRequest = async (req: Request, res: Response) => {
    const id = String(req.query.id)
    const update_request = req.body
    const result = await repository.update(id, update_request)

    //Object to update
    if (!result) return createResponse(res, 'Update Operation failed', undefined, 500)
    return createResponse(res, "Request Updated", result, 200)
}


export let getAllRequest = async (req: Request, res: Response) => {
    const query = {}
    const result = await repository.find(query)

    if (!result) return createResponse(res, 'Requests not found', undefined, 404)
    return createResponse(res, "Requests found", result, 200)
}



export let getRequestById = async (req: Request, res: Response) => {
    const id = req.query.id
    const result = await repository.findOne({ _id: id })
    if (!result) return createResponse(res, 'Request not found', undefined, 404)
    return createResponse(res, "Request found", result, 200)
}

export let getRequests = async (req: Request, res: Response) => {
    const query = req.body
    //console.log(query)
    const result = await repository.find(query)
    // console.log(Boolean(result))
    if (result) {
        if (result.length>0) {
            return createResponse(res, "Requests found", result, 200)
        } else {
            return createResponse(res, "Request not found", undefined, 404)
        }
    }
    return createResponse(res, "Bad request. Operation failed", undefined, 500)
}

export let getNRequests = async (req: Request, res: Response) => {
    const query = req.body
    // console.log(query)
    if (req.params.limit != "" && !isNaN(Number(req.params.limit))) {
        const limit = Number(req.params.limit)
        const result = await repository.findN(query, limit)
        // console.log(result)
        if (result) {
            if (result.length>0) {
                return createResponse(res, "Requests found", result, 200)
            } else {
                return createResponse(res, "Request not found", undefined, 404)
            }
        }
        return createResponse(res, "Bad request. Operation failed", undefined, 500)
    } else {
        return createResponse(res, "Parameter not found", undefined, 500)
    }

}

export let getOpenRequests = async (req: Request, res: Response) =>{
    const result = await repository.getOpenRequests()
    if (result) {
        return createResponse(res,"Requests found",result,200)
    } else {
        return createResponse(res,"Operation failed",undefined,500)
    }
}
export let getRequestByCustomer = async (req: Request, res: Response) =>{
    const customerid = req.query.id
    const result = await repository.getRequestByCustomer(customerid)
    if (result) {
        return createResponse(res,"Requests found",result,200)
    } else {
        return createResponse(res,"Operation failed",undefined,500)
    }
}

export let getRequestByTags = async (req: Request, res: Response) =>{
    const tags:any[] = req.body.tag
    const result = await repository.getRequestByTags(tags)
    if (result) {
        if (result.length>0) {
            return createResponse(res, "Requests found", result, 200)
        } else {
            return createResponse(res, "Request not found", undefined, 404)
        }
    }
    return createResponse(res, "Bad request. Operation failed", undefined, 500)
}