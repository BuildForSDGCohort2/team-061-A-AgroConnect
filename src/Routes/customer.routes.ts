import * as customercontroller from "../Controllers/Customer.controller"
import {createResponse} from "../Utils/Response.custom"
import express, {Request,Response} from "express"
export let Customer_Router = express.Router()

Customer_Router.all("/info",(req:Request,res:Response)=>{
    return createResponse(res,"CRUD API For handling Customer operations",{},200)
})
//get host/customer/
Customer_Router.get("/",customercontroller.getAllCustomers)

// //post host/customer/
// router.post("/",Customercontroller.createCustomer)

//delete host/customer/id
Customer_Router.delete("/:id", customercontroller.deleteCustomer)

//post host/customer/update
Customer_Router.post("/update", customercontroller.updateCustomer)

//get host/customer/:id
Customer_Router.get("/find", customercontroller.getCustomerById)

//post host/customer/find
Customer_Router.post("/find", customercontroller.getAllCustomers)

//post host/customer/find/:limit
Customer_Router.post("/find/:limit", customercontroller.getNCustomers)


