import * as ordercontroller from "../Controllers/Order.controller"
import express, {Request,Response} from "express"
import {createResponse} from "../Utils/Response.custom"
export let Order_Router = express.Router()

Order_Router.all("/info",(req:Request,res:Response)=>{
    return createResponse(res,"CRUD API For handling Product Order operations",{},200)
})
