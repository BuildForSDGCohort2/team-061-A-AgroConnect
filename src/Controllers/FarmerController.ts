import {FarmerRepository} from "../repositories/Farmer.repository"
import { getModelForClass } from "@typegoose/typegoose"
import { Farmer } from "../entities/Farmer"
import {Request, Response} from "express"

const repository = new FarmerRepository(getModelForClass(Farmer))


export let deleteFarmer = async (req: Request, res:Response) =>{
    const id = req.params.id
    const result = await repository.delete(id)
    if (result) {
        return res.send("Deleted "+id+" successfully")
    }
    return res.status(500).send("Delete operation failed")
}
export let getAllFarmers = async (req: Request, res:Response) =>{
    const query = {}
    const result = await repository.find(query)
    if (result) {
        return res.send(result)
    }
    return res.status(500).send("Fatal error occured")
}
export let updateFarmer = async (req:Request,res:Response) =>{
    const id = String(req.query.id)
    const update = req.body
    const result = await repository.update(id,update)
    if(Boolean(result)){
        console.log(result.firstname)
        return res.send(result)
    }else{
        return res.status(404).send("User not found")
    }
}
export let getFarmerbyId = async (req:Request,res:Response) =>{
    const id = req.query.id
    const result = await repository.findOne({_id:id})
    // console.log(Boolean(result))
    if(Boolean(result)){
        console.log(result.firstname)
        return res.send(result)
    }else{
        return res.status(404).send("User not found")
    }
}
export let getFarmers = async (req:Request,res:Response)=>{
    const query = req.body
    // console.log(query)
    if (req.params.limit !="") {
        const limit = Number(req.params.limit)
        const result = await repository.findN(query,limit)
        console.log(result)
        if(result){
            return res.send(result)
        }
    } else {
        const result = await repository.find(query)
        console.log(Boolean(result))
        
        if(result){
            console.log("done")
            return res.send(result)
        }else{
            return res.status(404).send({message:"User not found"})
        }
    }
}
