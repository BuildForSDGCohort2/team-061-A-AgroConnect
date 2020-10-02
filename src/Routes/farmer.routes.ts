import * as farmercontroller from "../Controllers/Farmer.controller"
import express, {Request,Response} from "express"

export let Farmer_router = express.Router()

Farmer_router.all("/info",(req:Request,res:Response)=>{
    res.status(200).send("CRUD API endpoints for handling Farmer operations")
})
//get host/farmer
Farmer_router.get("",farmercontroller.getAllFarmers)

//post host/farmer/tags
Farmer_router.post("/tags",farmercontroller.getFarmerByNiche)

//delete host/farmer/id
Farmer_router.delete("/:id",farmercontroller.deleteFarmer)

//post host/farmer/update
Farmer_router.post("/update",farmercontroller.updateFarmer)

//get host/farmer/:id
Farmer_router.get("/find",farmercontroller.getFarmerbyId)


//post host/farmer/find
Farmer_router.post("/find",farmercontroller.getFarmers)

//get host/farmer/location
Farmer_router.get("/location",farmercontroller.getFarmerByCountryAndState)

//get host/farmer/organization
Farmer_router.get("/organization",farmercontroller.searchOrganization)

//post host/farmer/rate
Farmer_router.put("/rate",farmercontroller.rateFarmer)

//post host/farmer/find/:limit
Farmer_router.post("/find/:limit",farmercontroller.getNFarmers)
