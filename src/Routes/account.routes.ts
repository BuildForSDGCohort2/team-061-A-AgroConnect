import * as accountcontroller from "../Controllers/Account.controller"
import express, {Request,Response} from "express"
import {createResponse} from "../Utils/Response.custom"
export let Account_Router = express.Router()

// host/account/info
Account_Router.all("/info",(req:Request,res:Response)=>{
    return createResponse(res,"CRUD API For handling Logins and Signups",{},200)
})

//post host/account/login
Account_Router.post("/login",accountcontroller.Login)

//post host/account/farmer
Account_Router.post("/farmer",accountcontroller.createFarmer)

//post host/account/customer
Account_Router.post("/customer",accountcontroller.createCustomer)