import * as productcontroller from "../Controllers/Product.controller"
import express, {Request,Response} from "express"
import {createResponse} from "../Utils/Response.custom"
export let Product_Router = express.Router()

Product_Router.all("/info",(req:Request,res:Response)=>{
    return createResponse(res,"CRUD API For handling Farmer Product operations",{},200)
})

//post host/product
Product_Router.post("",productcontroller.createProduct)
// get host/product
Product_Router.get("",productcontroller.getAllProducts)
//get host/product/find
Product_Router.get("/find",productcontroller.getProductbyId)
//post host/product/find
Product_Router.post("/find",productcontroller.getProducts)
//post host/product/find/:limit
Product_Router.post("/find/:limit",productcontroller.getNProducts)
//post host/product/update [not all fields TODO breakdown]
Product_Router.post("/update",productcontroller.updateProduct)
//delete host/product/:id
Product_Router.delete("/:id",productcontroller.deleteProduct)
//post host/product/farmer
Product_Router.post("/farmer",productcontroller.getProductsByFarmer)
//post host/product/stock
Product_Router.post("/stock",productcontroller.restockProduct)
//post host/product/stock/status
Product_Router.post("/stock/status",productcontroller.updateRestockStatus)
//post host/product/category
Product_Router.post("/category",productcontroller.getProductsByCategory)