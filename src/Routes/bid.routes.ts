import * as bidcontroller from "../Controllers/Bid.controller"
import express, {Request,Response} from "express"
import {createResponse} from "../Utils/Response.custom"
export let Bid_Router = express.Router()

Bid_Router.all("/info",(req:Request,res:Response)=>{
    return createResponse(res,"CRUD API For hBids",{},200)
})