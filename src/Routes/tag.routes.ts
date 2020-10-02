import * as tagcontroller from "../Controllers/Tag.controller"
import express, {Request,Response} from "express"
import {createResponse} from "../Utils/Response.custom"
export let Tag_Router = express.Router()

Tag_Router.all("/info",(req:Request,res:Response)=>{
    return createResponse(res,"CRUD API For handling Tags for Reuest and niche identification",{},200)
})

//post host/tag
Tag_Router.post("",tagcontroller.createTag)

//get host/tag/
Tag_Router.get("/",tagcontroller.getAllTag)


//delete host/tag/id
Tag_Router.delete("/:id", tagcontroller.deleteTag)

//post host/tag/update
Tag_Router.post("/update", tagcontroller.updateTag)

//get host/tag/:id
Tag_Router.get("/find", tagcontroller.getTagById)

//post host/tag/find
Tag_Router.post("/find", tagcontroller.getTags)

//post host/tag/find/:limit
Tag_Router.post("/find/:limit", tagcontroller.getNTags)


