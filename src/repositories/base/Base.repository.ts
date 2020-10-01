import { IWrite } from "../interfaces/IWrite";
import { IRead } from "../interfaces/IRead";
import { Collection, Model, MongooseDocument, Schema } from "mongoose";
import { getModelForClass, buildSchema } from "@typegoose/typegoose";
import { Farmer } from "../../entities/Farmer";

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T>{
    public model: any;
    // temp = getModelForClass(Farmer)
    constructor(dbcontext: any) {
        this.model = dbcontext;
    }

    async create(item: T): Promise<string | null> {
        try {
            const res = await this.model.create(item)
            // const res = await this.model.collection.insertOne(item)
            return res._id
        } catch (error) {
            return null
        }
    }
    async update(id: string, update: any): Promise<T | null> {
        try {
            const res = await this.model.findByIdAndUpdate(id, update, { useFindAndModify: false, new: true, select: { password: 0 } })
            // console.log(res)
            // const res = await this.model.collection.findOneAndUpdate({_id:id},update)
            return res
        } catch (error) {
            return null
        }
    }
    async delete(id: string): Promise<boolean> {
        try {
            const res = await this.model.findByIdAndDelete(id)
            // const res = await this.model.collection.deleteOne({_id:id})
            return Boolean(res)
        } catch (error) {
            return false
        }
    }
    async find(query: any): Promise<T[] | null> {
        try {
            const res = await this.model.find(query, { password: 0 })
            // console.log(res.length)
            // const res = await this.model.collection.find(query)
            return res
        } catch (error) {
            return null
        }
    }
    async findOne(query: any): Promise<T | null> {
        try {
            const res = await this.model.findOne(query, { password: 0 })
            // console.log(res)
            // const res = await this.model.collection.findOne(query)
            return res
        } catch (error) {
            return null
        }
    }
    async findN(query: any, limit: number): Promise<T[] | null> {
        try {
            const res = await this.model.find(query, null, { limit: limit })
            return res
        } catch (error) {
            return null
        }
    }

}