import {FarmerRepository} from "../repositories/Farmer.repository"
import { CustomerRepository } from "../repositories/Customer.repository";
import { getModelForClass } from "@typegoose/typegoose"
import { FarmerModel } from "../entities/Farmer"
import { CustomerModel } from "../entities/Customer";
import {Request, Response} from "express"
import {createResponse} from "../Utils/Response.custom"
const Farmer_repository = new FarmerRepository(FarmerModel)
const Customer_repository = new CustomerRepository(CustomerModel)

export let Login = async (req:Request,res:Response) =>{
    const type = req.body.type
    const email = req.body.email
    const pass = req.body.password
    const query = {email:email,password:pass}
    if (type == "Farmer") {
        const farmer = await Farmer_repository.findOne(query)
        if (farmer) {
            farmer.password = ""
            return createResponse(res,"Login Successfull",farmer,200)
        }else{
            return createResponse(res,"User not found",{},404)
        }
    }else if (type == "Customer"){
        const customer = await Customer_repository.findOne(query)
        if (customer) {
            customer.password = ""
            return createResponse(res,"Login Successfull",customer,200)
        }else{
            return createResponse(res,"User not found",{},404)
        }

    }
}
export let createFarmer = async (req: Request, res: Response) =>{
    const farmer = req.body
    const existing = await Farmer_repository.findOne({email:farmer.email})
    if (existing) {
        return createResponse(res,"User with email Exists Already",{},500)
    }else{
        const result = await Farmer_repository.create(farmer)
        // console.log(result);
        if (result) {
            const newFarmer = await Farmer_repository.findOne(result)
            // console.log(newFarmer)
            return createResponse(res,"User Created Successfully",newFarmer,200)
        }
        return createResponse(res,"Problem creating user",{},500)
    }
    
}
// export let retrievePassword