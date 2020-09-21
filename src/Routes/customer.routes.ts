import * as customercontroller from "../Controllers/Customer.controller"
import {createResponse} from "../Utils/Response.custom"
import express, {Request,Response} from "express"
export let Customer_router = express.Router()

Customer_router.all("/info",(req:Request,res:Response)=>{
    return createResponse(res,"CRUD API For handling Customer operations",{},200)
})
//get host/customer/
Customer_router.get("/",customercontroller.getAllCustomers)

// //post host/customer/
// router.post("/",Customercontroller.createCustomer)

//delete host/customer/id
Customer_router.delete("/:id", customercontroller.deleteCustomer)

//post host/customer/update
Customer_router.post("/update", customercontroller.updateCustomer)

//get host/customer/:id
Customer_router.get("/find", customercontroller.getCustomerById)

//post host/customer/:limit
Customer_router.post("/:limit", customercontroller.getCustomers)

//post host/customer/
Customer_router.post("/", customercontroller.getAllCustomers)
