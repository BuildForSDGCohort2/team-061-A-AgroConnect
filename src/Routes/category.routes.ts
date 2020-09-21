import * as categorycontroller from "../Controllers/Category.controller"
import express, {Request,Response} from "express"
import {createResponse} from "../Utils/Response.custom"
export let Category_Router = express.Router()

Category_Router.all("/info",(req:Request,res:Response)=>{
    return createResponse(res,"CRUD API For handling Product Categories",{},200)
})

//get host/category/
Category_Router.get("/",categorycontroller.getAllCategory)

// //post host/category/
// router.post("/",Categorycontroller.createCategory)

//delete host/category/id
Category_Router.delete("/:id", categorycontroller.deleteCategory)

//post host/category/update
Category_Router.post("/update", categorycontroller.updateCategory)

//get host/category/:id
Category_Router.get("/find", categorycontroller.getCategoryById)

//post host/category/:limit
Category_Router.post("/:limit", categorycontroller.getCategory)

//post host/category/
Category_Router.post("/", categorycontroller.getAllCategory)