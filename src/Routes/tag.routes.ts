import * as tagcontroller from "../Controllers/Tag.controller"
import express, {Request,Response} from "express"
import {createResponse} from "../Utils/Response.custom"
export let Tag_Router = express.Router()

Tag_Router.all("/info",(req:Request,res:Response)=>{
    return createResponse(res,"CRUD API For handling Tags for Reuest and niche identification",{},200)
})