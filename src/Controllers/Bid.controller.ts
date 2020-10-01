import { BidRepository } from "../repositories/Bid.repository"
import { Request, Response } from "express"
import { Bid } from "../entities/Bid";
import { getModelForClass } from '@typegoose/typegoose'
import { createResponse } from "../Utils/Response.custom"

const repository = new BidRepository(getModelForClass(Bid))



export let createBid = async (req: Request, res: Response) => {
    const Bid = req.body
    const result = await repository.create(Bid)
    if (result) {
        const newBid = await repository.findOne({ _id: result })
        return createResponse(res, "Bid created", newBid, 200)
    } else {
        return createResponse(res, "Error creating Bid in db", undefined, 500)
    }
}

export let deleteBid = async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await repository.delete(id)
    if (!result) {
        return createResponse(res, 'Bad request. Operation failed', undefined, 500)
    } else {
        return createResponse(res, `Bid ${id} deleted`, undefined, 200)
    }
}

export let updateBid = async (req: Request, res: Response) => {
    const id = String(req.params.id)
    const update_bid = req.body
    const result = await repository.update(id, update_bid)

    //Object to update
    if (!result) return createResponse(res, 'Bids not found. Operation failed', undefined, 404)
    return createResponse(res, "Bid Updated", result, 200)
}


export let getAllBid = async (req: Request, res: Response) => {
    const query = {}
    const result = repository.find(query)

    if (!result) return createResponse(res, 'Bids not found. Operation failed', undefined, 404)
    return createResponse(res, "Successful", result, 200)
}



export let getBidById = async (req: Request, res: Response) => {
    const id = req.query.id
    const result = await repository.findOne({ _id: id })
    if (!result) return createResponse(res, 'Bid not found. Operation failed', undefined, 404)
    return createResponse(res, "Successful", result, 200)
}

export let getBids = async (req: Request, res: Response) => {
    const query = req.body
    //console.log(query)
    const result = await repository.find(query)
    // console.log(Boolean(result))
    if (result) {
        // console.log("done")
        return createResponse(res, "Successful", result, 200)
    } else {
        return createResponse(res, "Bids not found. Operation failed", undefined, 404)
    }
}

export let getNBids = async (req: Request, res: Response) => {
    const query = req.body
    // console.log(query)
    if (req.params.limit != "" && !isNaN(Number(req.params.limit))) {
        const limit = Number(req.params.limit)
        const result = await repository.findN(query, limit)
        // console.log(result)
        if (result) {
            return createResponse(res, "Successful", result, 200)
        } else {
            return createResponse(res, "Bid not found", undefined, 404)
        }
    } else {
        return createResponse(res, "Parameter not found. Operation failed", undefined, 500)
    }

}