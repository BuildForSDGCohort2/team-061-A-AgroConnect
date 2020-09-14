import * as farmercontroller from "../Controllers/FarmerController"
import express, {Request,Response} from "express"

export let Farmer_router = express.Router()

Farmer_router.all("/info",(req:Request,res:Response)=>{
    res.status(200).send("CRUD API endpoints for managing farmer accounts")
})
//get host/farmer/
Farmer_router.get("/",farmercontroller.getAllFarmers)

// //post host/farmer/
// router.post("/",farmercontroller.createFarmer)

//delete host/farmer/id
Farmer_router.delete("/:id",farmercontroller.deleteFarmer)

//post host/farmer/update
Farmer_router.post("/update",farmercontroller.updateFarmer)

//get host/farmer/:id
Farmer_router.get("/find",farmercontroller.getFarmerbyId)

//post host/farmer/:limit
Farmer_router.post("/:limit",farmercontroller.getFarmers)

//post host/farmer/
Farmer_router.post("/",farmercontroller.getFarmers)
