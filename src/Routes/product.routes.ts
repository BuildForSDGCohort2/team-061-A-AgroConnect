import * as productcontroller from "../Controllers/Product.controller"
import express, {Request,Response} from "express"
import {createResponse} from "../Utils/Response.custom"
export let Product_Router = express.Router()

Product_Router.all("/info",(req:Request,res:Response)=>{
    return createResponse(res,"CRUD API For handling Farmer Product operations",{},200)
})