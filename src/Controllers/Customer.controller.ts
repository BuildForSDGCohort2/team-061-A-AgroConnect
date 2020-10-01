import { CustomerRepository } from "../repositories/Customer.repository"
import { Request, Response } from "express"
import { Customer, CustomerModel } from "../entities/Customer";
import { getModelForClass } from "@typegoose/typegoose";
import { createResponse } from "../Utils/Response.custom";

const repository = new CustomerRepository(CustomerModel)

export let deleteCustomer = async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await repository.delete(id)
    if (result){
        return createResponse(res,`Deleted ${id} successfully`,undefined,200)
    }else{
        return createResponse(res,"Delete Operation Failed",undefined,500)
    }
}

export let updateCustomer = async (req: Request, res: Response) => {
    const id = String(req.params.id)
    const update = req.body
    const result = await repository.update(id, update)
    //Object properties to update
    if (result){
        return createResponse(res,`Updated ${id} Successfully`,result,200)
    } else{
        return createResponse(res,"Update Operation Failed",undefined,500)
    }
}

export let getAllCustomers = async (req: Request, res: Response) => {
    const query = {}
    const result = await repository.find(query)
    if (result){
        return createResponse(res,"Customers found",result,200)
    }else{
        return createResponse(res,"Customers not found",undefined,404)
    }
}

export let getCustomerById = async (req: Request, res: Response) => {
    const id = req.query.id
    const result = await repository.findOne({ _id: id })
    if (result){
        return createResponse(res,"Customer found",result,200)
    }else{
        return createResponse(res,"Customer not found",undefined,404)
    }
}

export let getCustomers = async (req: Request, res: Response) => {
    const query = req.body
    //console.log(query)
    const result = await repository.find(query)
    // console.log(Boolean(result))
    if (result){
        return createResponse(res,"Customers found",result,200)
    }else{
        return createResponse(res,"Customers not found",undefined,404)
    }
}

export let getNCustomers = async (req: Request, res: Response) => {
    const query = req.body
    // console.log(query)
    if (req.params.limit != "" && !isNaN(Number(req.params.limit))) {
        const limit = Number(req.params.limit)
        const result = await repository.findN(query, limit)
        // console.log(result)
        if (result){
            return createResponse(res,"Customers found",result,200)
        }else{
            return createResponse(res,"Customers not found",undefined,404)
        }
    } else {
        return createResponse(res,"Parameter not found",undefined,500 )
    }

}