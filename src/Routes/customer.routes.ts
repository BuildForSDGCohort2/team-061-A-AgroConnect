import * as customercontroller from "../Controllers/Customer.controller"
import {createResponse} from "../Utils/Response.custom"
import express, {Request,Response} from "express"
export let Customer_router = express.Router()

Customer_router.all("/info",(req:Request,res:Response)=>{
    return createResponse(res,"CRUD API For handling Customer operations",{},20Customer
//get host/farmer/
Customer_router.get("/",farmercontroller.getAllFarmers)

// //post host/farmer/
// router.post("/",farmercontroller.createFarmer)

//delete host/farmer/id
Customer_router.delete("/:id",farmercontroller.deleteFarmer)

//post host/farmer/update
Customer_router.post("/update",farmercontroller.updateFarmer)

//get host/farmer/:id
Customer_router.get("/find",farmercontroller.getFarmerbyId)

//post host/farmer/:limit
Customer_router.post("/:limit",farmercontroller.getFarmers)

//post host/farmer/
Customer_router.post("/",farmercontroller.getFarmers)
