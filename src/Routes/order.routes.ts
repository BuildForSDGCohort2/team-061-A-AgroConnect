import * as ordercontroller from "../Controllers/Order.controller"
import express, {Request,Response} from "express"
import {createResponse} from "../Utils/Response.custom"
export let Order_Router = express.Router()

Order_Router.all("/info",(req:Request,res:Response)=>{
    return createResponse(res,"CRUD API For handling Product Order operations",{},200)
})

//post host/order/single
Order_Router.post("/single",ordercontroller.CreateSingleOrder)

//post host/order/bulk
Order_Router.post("/bulk",ordercontroller.CreateBulkOrder)

//get host/order/
Order_Router.get("/",ordercontroller.getAllOrder)

//delete host/order/id
Order_Router.delete("/:id", ordercontroller.deleteOrder)

//post host/order/update
Order_Router.post("/update", ordercontroller.updateOrder)

//get host/order/find
Order_Router.get("/find", ordercontroller.getOrderById)

//post host/order/find/:limit
Order_Router.post("/find/:limit", ordercontroller.getNOrders)

//post host/order/find
Order_Router.post("/find", ordercontroller.getOrders)

//get host/order/find/customer
Order_Router.get("/find/customer",ordercontroller.getOrdersbyCustomer)

//get host/order/find/farmer
Order_Router.get("/find/farmer",ordercontroller.getOrdersbyFarmer)
