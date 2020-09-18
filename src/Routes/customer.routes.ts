import * as customercontroller from "../Controllers/Customer.controller"
import {createResponse} from "../Utils/Response.custom"
import express, {Request,Response} from "express"
export let Customer_router = express.Router()

Customer_router.all("/info",(req:Request,res:Response)=>{
    return createResponse(res,"CRUD API For handling Customer operations",{},200)
//get host/farmer/
Customer_router.get("/",farmercontroller.getAllFarmers)

// //post host/farmer/
// router.post("/",farmercontroller.createFarmer)

//delete host/farmer/id
Customer_router.delete("/:id", customercontroller.deleteCustomer)

//post host/farmer/update
Customer_router.post("/update", customercontroller.updateCustomer)

//get host/farmer/:id
Customer_router.get("/find", customercontroller.getCustomerById)

//post host/farmer/:limit
Customer_router.post("/:limit", customercontroller.getCustomers)

//post host/farmer/
Customer_router.post("/", customercontroller.getAllCustomers)
