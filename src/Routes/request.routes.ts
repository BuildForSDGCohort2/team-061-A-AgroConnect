import * as requestcontroller from "../Controllers/Request.controller"
import express, {Request,Response} from "express"
import {createResponse} from "../Utils/Response.custom"
export let Request_Router = express.Router()

Request_Router.all("/info",(req:Request,res:Response)=>{
    return createResponse(res,"CRUD API For handling User Request operations",{},200)
})