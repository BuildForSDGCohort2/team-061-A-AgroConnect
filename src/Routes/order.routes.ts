import * as ordercontroller from "../Controllers/Order.controller"
import express, {Request,Response} from "express"
import {createResponse} from "../Utils/Response.custom"
export let Order_Router = express.Router()

Order_Router.all("/info",(req:Request,res:Response)=>{
    return createResponse(res,"CRUD API For handling Product Order operations",{},200)
})

//get host/order/
Order_Router.get("/",ordercontroller.getAllOrder)


//delete host/order/id
Order_Router.delete("/:id", ordercontroller.deleteOrder)

//post host/order/update
Order_Router.post("/update", ordercontroller.updateOrder)

//get host/order/:id
Order_Router.get("/find", ordercontroller.getOrderById)

//post host/order/:limit
Order_Router.post("/:limit", ordercontroller.getNOrders)

//post host/order/
Order_Router.post("/", ordercontroller.getOrders)

