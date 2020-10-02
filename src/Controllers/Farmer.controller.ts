import {FarmerRepository} from "../repositories/Farmer.repository"
import {Request, Response} from "express"
import { Farmer, FarmerModel } from "../entities/Farmer"
import { getModelForClass } from "@typegoose/typegoose"
import { capitalizeFirstLetterOnly } from "../Utils/string.utils"
import { createResponse } from "../Utils/Response.custom"

const repository = new FarmerRepository(FarmerModel)


export let deleteFarmer = async (req: Request, res:Response) => {
    const id = req.params.id
    const result = await repository.delete(id)
    if (result) {
        return createResponse(res,`Delete ${id} Successfully`,undefined,200)
    }else{
        return createResponse(res,"Delete Operation Failed",undefined,500)
    }
}
export let getAllFarmers = async (req: Request, res:Response) =>{
    const query = {}
    const result = await repository.find(query)
    if (result) {
        return createResponse(res,"Farmers found",result,200)
    }
    return createResponse(res,"Farmers not found",undefined,404)
}
export let updateFarmer = async (req:Request,res:Response) =>{
    const id = String(req.query.id)
    const update = req.body
    const result = await repository.update(id,update)
    if (result) {
        return createResponse(res,"Farmer updated",result,200)
    }
    return createResponse(res,"Farmer not found",undefined,404)
}
export let getFarmerbyId = async (req:Request,res:Response) =>{
    const id = req.query.id
    const result = await repository.findOne({_id:id})
    // console.log(Boolean(result))
    if (result) {
        return createResponse(res,"Farmer found",result,200)
    }
    return createResponse(res,"Farmer not found",undefined,404)
}
export let getFarmers = async (req: Request, res: Response) => {
    const query = req.body
    // console.log(query)
    const result = await repository.find(query)
    // console.log(Boolean(result))
    if (result) {
        if (result.length>0) {
            return createResponse(res, "Farmers found", result, 200)
        } else {
            return createResponse(res, "Farmers not found", undefined, 404)
        }
    }
    return createResponse(res, "Bad request. Operation failed", undefined, 500)
}
export let getNFarmers = async (req: Request, res:Response)=>{
    const query = req.body
    if (req.params.limit !="" && !isNaN(Number(req.params.limit))) {
        const limit = Number(req.params.limit)
        const result = await repository.findN(query,limit)
        // console.log(result)
        if (result) {
            if (result.length>0) {
                return createResponse(res, "Farmers found", result, 200)
            } else {
                return createResponse(res, "Farmers not found", undefined, 404)
            }
        }
        return createResponse(res, "Bad request. Operation failed", undefined, 500)
    }else{
        return createResponse(res,"Parameter not found",undefined,500)
    }
}
export let getFarmerByCountryAndState = async (req:Request,res:Response) => {
    const country = capitalizeFirstLetterOnly(req.query.country)
    const state = capitalizeFirstLetterOnly(req.query.state)
    let result:any
    if (country&&state) {
         result = await repository.getFarmersinCountryandState(country,state)
    }else if(country){
        result = await repository.getFarmersinCountry(country)
    }
    if (result) {
        if (result.length>0) {
            return createResponse(res,"Users found",result,200)
        }
        return createResponse(res,"Users not found",undefined,404)
    } else {
        return createResponse(res,"Error Occured",undefined,500)
    }
}
export let rateFarmer = async (req:Request,res:Response) => {
    const farmerid = req.body.id
    const rating = req.body.rating
    const result = await repository.rateFarmer(farmerid,rating)
    if (result) {
        return createResponse(res,"Farmer rated",result,200)
    }
    return createResponse(res,"Error updating rating",{},500)
}
export let searchOrganization = async (req:Request,res:Response) => {
    // TODO search case insensitive
    const org:string = String(req.query.q)
    const result = await repository.searchByOrganization(org)
    if (result) {
        return createResponse(res,"Search results",result,200)
    }
    return createResponse(res,"Error occured during search",{},500)
}
export let getFarmerByNiche = async (req:Request,res:Response) => {
    const niches:number[] = req.body.niches
    if(!(niches.length>0)){
        return createResponse(res,"no results available",undefined,404)
    }
    const result = await repository.getFarmersbyNiche(niches)
    if (result) {
        if (result.length>0) {
            return createResponse(res,"Farmers found",result,200)
        }
        return createResponse(res,"no results available",undefined,404)
    } else {
        return createResponse(res,"Error Ocuured",undefined,500)
    }
}

