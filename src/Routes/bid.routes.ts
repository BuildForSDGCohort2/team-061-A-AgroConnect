import * as bidcontroller from "../Controllers/Bid.controller"
import express, {Request,Response} from "express"
import {createResponse} from "../Utils/Response.custom"
export let Bid_Router = express.Router()

Bid_Router.all("/info",(req:Request,res:Response)=>{
    return createResponse(res,"CRUD API For hBids",{},200)
})

//post host/bid
Bid_Router.post("",bidcontroller.createBid)

//get host/bid/
Bid_Router.get("/",bidcontroller.getAllBid)

//delete host/bid/id
Bid_Router.delete("/:id", bidcontroller.deleteBid)

//post host/bid/update
Bid_Router.post("/update", bidcontroller.updateBid)

//get host/bid/:id
Bid_Router.get("/find", bidcontroller.getBidById)

//post host/bid/find/:limit
Bid_Router.post("/find/:limit", bidcontroller.getNBids)

//post host/bid/find
Bid_Router.post("/find", bidcontroller.getBids)

//post host/bid/find/farmer
Bid_Router.get("/find/farmer",bidcontroller.getBidsByFarmer)

//post host/bid/find/request
Bid_Router.get("/find/request",bidcontroller.getBidsbyRequest)

