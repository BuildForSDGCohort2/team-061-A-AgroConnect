import { TagRepository } from "../repositories/Tag.repository"
import { Request, Response } from "express"
import { Tag, TagModel } from "../entities/Tag";
import { getModelForClass } from '@typegoose/typegoose'
import { createResponse } from "../Utils/Response.custom"



const repository = new TagRepository(TagModel)

export let createTag = async (req: Request, res: Response) => {
    const Tag = req.body
    const result = await repository.create(Tag)
    if (!isNaN(Number(result))) {
        const newTag = await repository.findOne({ _id: result })
        return createResponse(res, "Tag created", newTag, 200)
    } else {
        return createResponse(res, "Error creating Tag in db", undefined, 500)
    }
}

export let deleteTag = async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await repository.delete(id)
    if (result) {
        return createResponse(res,`Deleted ${id} Successfully`,undefined,200)
    }
    return createResponse(res,"Delete Operation Failed",undefined,500)
}

export let updateTag = async (req: Request, res: Response) => {
    const id = String(req.query.id)
    const update_tag = req.body
    const result = await repository.update(id, update_tag)

    if (result) {
        return createResponse(res,`Updated ${id} Successfully`,undefined,200)
    }
    return createResponse(res,"Update Operation Failed",undefined,500)
}

export let getAllTag = async (req: Request, res: Response) => {
    const query = {}
    const result = await repository.find(query)
    if (result) {
        return createResponse(res,"Tags found",result,200)
    }
    return createResponse(res,"Tags not found",undefined,404)
}

export let getTagById = async (req: Request, res: Response) => {
    const id = req.query.id
    const result = await repository.findOne({ _id: id })
    if (result) {
        return createResponse(res,"Tag found",result,200)
    }
    return createResponse(res,"Tag not found",undefined,404)
}

export let getTags = async (req: Request, res: Response) => {
    const query = req.body
    //console.log(query)
    const result = await repository.find(query)
    // console.log(Boolean(result))
    if (result) {
        if (result.length>0) {
            return createResponse(res, "Tags found", result, 200)
        } else {
            return createResponse(res, "Tags not found", undefined, 404)
        }
    }
    return createResponse(res, "Bad request. Operation failed", undefined, 500)
}

export let getNTags = async (req: Request, res: Response) => {
    const query = req.body
    // console.log(query)
    if (req.params.limit != "") {
        const limit = Number(req.params.limit)
        const result = await repository.findN(query, limit)
        // console.log(result)
        if (result) {
            if (result.length>0) {
                return createResponse(res, "Tags found", result, 200)
            } else {
                return createResponse(res, "Tags not found", undefined, 404)
            }
        }
        return createResponse(res, "Bad request. Operation failed", undefined, 500)
    } else {
        return createResponse(res,"Parameter not found",undefined,500)
    }

}