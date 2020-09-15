import * as customercontroller from "../Controllers/Customer.controller"
import express, {Request,Response} from "express"
import {createResponse} from "../Utils/Response.custom"
export let Customer_Router = express.Router()

Customer_Router.all("/info",(req:Request,res:Response)=>{
    return createResponse(res,"CRUD API For handling Customer operations",{},200)
})