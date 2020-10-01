import { CategoryRepository } from "../repositories/Category.repository"
import { Request, Response } from "express"
import { Category, CategoryModel } from "../entities/Category";
import { getModelForClass } from '@typegoose/typegoose'
import { createResponse } from "../Utils/Response.custom"

const repository = new CategoryRepository(CategoryModel)


export let createCategory = async (req: Request, res: Response) => {
    const Category = req.body
    const result = await repository.create(Category)
    if (result) {
        const newCategory = await repository.findOne({ _id: result })
        return createResponse(res, "Category created", newCategory, 200)
    } else {
        return createResponse(res, "Error creating category in db", undefined, 500)
    }
}

export let deleteCategory = async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await repository.delete(id)
    if (result) {
        return createResponse(res, `Deleted ${id} Successfully`, undefined, 200)
    } else {
        return createResponse(res, "Delete Operation Failed", undefined, 500)
    }
}

export let updateCategory = async (req: Request, res: Response) => {
    const id = String(req.params.id)
    const updateCategory = req.body
    const result = await repository.update(id, updateCategory)
    if (result) {
        return createResponse(res, `Updated ${id} Successfully`, result, 200)
    } else {
        return createResponse(res, "Update Opearion failed", undefined, 500)
    }
}

export let getAllCategory = async (req: Request, res: Response) => {
    const query = {}
    const result = repository.find(query)
    if (result) {
        return createResponse(res, "Categories found", result, 200)
    } else {
        return createResponse(res,'No Categories Available',undefined,404)
    }

}

export let getCategoryById = async (req: Request, res: Response) => {
    const id = req.query.id
    const result = await repository.findOne({ _id: id })
    if (result){
        return createResponse(res,"Category found",result,200)
    }else{
        return createResponse(res,"Category not found",undefined,404)
    }
    
}

export let getCategories = async (req: Request, res: Response) => {
    const query = req.body
    //console.log(query)
    const result = await repository.find(query)
    // console.log(Boolean(result))
    if (result) {
        if (result.length>0) {
            return createResponse(res, "Categories found", result, 200)
        } else {
            return createResponse(res, "Categories not found", undefined, 404)
        }
    }
    return createResponse(res, "Bad request. Operation failed", undefined, 500)
}

export let getNCategories = async (req: Request, res: Response) => {
    const query = req.body
    // console.log(query)
    if (req.params.limit != "" && !isNaN(Number(req.params.limit))) {
        const limit = Number(req.params.limit)
        const result = await repository.findN(query, limit)
        // console.log(result)
        if (result) {
            if (result.length>0) {
                return createResponse(res, "Categories found", result, 200)
            } else {
                return createResponse(res, "Categories not found", undefined, 404)
            }
        }
        return createResponse(res, "Bad request. Operation failed", undefined, 500)
    } else {
        return createResponse(res,"Category not found",undefined,500)
    }

}