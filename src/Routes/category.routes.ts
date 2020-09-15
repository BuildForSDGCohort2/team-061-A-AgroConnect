import * as categorycontroller from "../Controllers/Category.controller"
import express, {Request,Response} from "express"
import {createResponse} from "../Utils/Response.custom"
export let Category_Router = express.Router()

Category_Router.all("/info",(req:Request,res:Response)=>{
    return createResponse(res,"CRUD API For handling Product Categories",{},200)
})