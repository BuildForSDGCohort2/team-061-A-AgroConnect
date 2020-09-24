import * as requestcontroller from "../Controllers/Request.controller"
import express, {Request,Response} from "express"
import {createResponse} from "../Utils/Response.custom"
export let Request_Router = express.Router()

Request_Router.all("/info",(req:Request,res:Response)=>{
    return createResponse(res,"CRUD API For handling User Request operations",{},200)
})

//post host/request
Request_Router.post("",requestcontroller.createRequest)


//get host/request/
Request_Router.get("/",requestcontroller.getAllRequest)


//delete host/request/id
Request_Router.delete("/:id", requestcontroller.deleteRequest)

//post host/request/update
Request_Router.post("/update", requestcontroller.updateRequest)

//get host/request/:id
Request_Router.get("/find", requestcontroller.getRequestById)

//post host/request/:limit
Request_Router.post("/:limit", requestcontroller.getNRequests)

//post host/request/
Request_Router.post("/", requestcontroller.getRequests)
