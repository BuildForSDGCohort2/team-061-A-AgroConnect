import {FarmerRepository} from "../repositories/FarmerRepository"
import { getModelForClass } from "@typegoose/typegoose"
import { Farmer } from "../entities/Farmer"
import {Request, Response} from "express"

const repository = new FarmerRepository(getModelForClass(Farmer))

export let createFarmer = async (req: Request, res: Response) =>{
    const farmer = req.body
    const result = await repository.create(farmer)
    console.log(result);
    if (result) {
        const newFarmer = await repository.findOne(result)
        console.log(newFarmer)
        return res.send(newFarmer)
    }
    return res.status(500).send("Problem creating user")
}
export let deleteFarmer = async (req: Request, res:Response) =>{
    const id = req.params.id
    const result = await repository.delete(id)
    if (result) {
        return res.send("Deleted "+id+" successfully")
    }
    return res.status(500).send("Delete operation failed")
}
export let getFarmers = async (req: Request, res:Response) =>{
    const query = req.body
    const result = await repository.find(query)
    if (result) {
        return res.send(result)
    }
    return res.status(500).send("Fatal error occured")
}