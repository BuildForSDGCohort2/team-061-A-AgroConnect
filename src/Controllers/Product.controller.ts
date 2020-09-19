import { ProductRepository } from "../repositories/Product.repository"
import { Request, Response } from "express"
import { Product } from "../entities/Product";
import { getModelForClass } from "@typegoose/typegoose";
import {createResponse} from "../Utils/Response.custom";

const repository = new ProductRepository(getModelForClass(Product))

export let createProduct = async (req: Request, res: Response) =>{
    const product = req.body
    const result = await repository.create(product)
    if (result) {
        const newProduct = await repository.findOne({_id:result})
        return createResponse(res,"Product created",newProduct,200)
    }else{
        return createResponse(res,"Error creating product in db",undefined,500)
    }
}
export let deleteProduct = async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await repository.delete(id)
    if (result) {
        return res.send("Deleted " + id + " successfully")
    }
    return res.status(500).send("Delete operation failed")
}
export let getAllProducts = async (req: Request, res: Response) => {
    const query = {}
    const result = await repository.find(query)
    if (result) {
        return createResponse(res,"Products found",result,200)
    }
    return createResponse(res,"Fatal error occured",undefined,500)
}
export let updateProduct = async (req: Request, res: Response) => {
    const id = String(req.query.id)
    const update = req.body
    const result = await repository.update(id, update)
    if (Boolean(result)) {
        // console.log(result.firstname)
        return createResponse(res,"Product found",result,200)
    } else {
        return createResponse(res,"Product not found",undefined,404)
    }
}
export let getProductbyId = async (req: Request, res: Response) => {
    const id = req.query.id
    const result = await repository.findOne({ _id: id })
    // console.log(Boolean(result))
    if (Boolean(result)) {
        // console.log(result.firstname)
        return createResponse(res,"Product found",result,200)
    } else {
        return createResponse(res,"Product not found",undefined,404)
    }
}
export let getProducts = async (req: Request, res: Response) => {
    const query = req.body
    // console.log(query)
    const result = await repository.find(query)
    console.log(Boolean(result))
    if (result) {
        console.log("done")
        return createResponse(res,"Products found",result,200)
    } else {
        return createResponse(res,"Products not found",undefined,404)
    }
}
export let getNProducts = async (req: Request, res:Response)=>{
    const query = req.body
    if (req.params.limit !="") {
        const limit = Number(req.params.limit)
        const result = await repository.findN(query,limit)
        console.log(result)
        if(result){
            return res.send(result)
        }else{
            return createResponse(res,"products not found",undefined,404)
        }
    }else{
        return createResponse(res,"Parameter not found",undefined,500)
    }
}
