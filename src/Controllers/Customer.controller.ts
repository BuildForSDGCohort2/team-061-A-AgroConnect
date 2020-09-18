import {CustomerRepository} from "../repositories/Customer.repository"
import {Request, Response} from "express"
import { Customer } from "../entities/Customer";    
import { getModelForClass } from "@typegoose/typegoose";

const repository = new CustomerRepository(getModelForClass(Customer))

export let deleteCustomer = async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await repository.delete(id)
    if (!result) return res.status(400).send("Bad request. Delete operation failed")

    return res.send(`Deleted ${id} Successfully`)
}

export let updateCustomer = async (req:Request, res: Response) => {
    const id = String(req.params.id)
    const update = req.body
    const result = await repository.update(id, update)
    //Object properties to update
    if (!result) return res.status(400).send('Bad request')

    //Update Customer Properties
    return res.send(result)
}

export let getAllCustomers = async (req:Request, res:Response) => {
    const query = {}
    const result = await repository.find(query)
    if (!result) return res.status(400).send("No customer Available")
}

export let getCustomerById = async (req:Request, res:Response) => {
    const id = req.query.id
    const result = await repository.findOne({_id: id})
    if (!result) return res.status(400).send("Invalid Customer")
}

export let getCustomers = async (req:Request,res:Response)=>{
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