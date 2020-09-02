import {IWrite} from "../interfaces/IWrite";
import {IRead} from "../interfaces/IRead";
import { Collection } from "mongoose";

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T>{
    private model:any;
    // temp!: Collection
    constructor (dbcontext:any){
        this.model = dbcontext;
    }
    async create(item: T): Promise<any> {
        const res = await this.model.collection.insertOne(item)
        return res.insertedId
    }
    async update(id: string, update: any): Promise<T> {
        const res = await this.model.collection.findOneAndUpdate({_id:id},update)
        return res.value
    }
    async delete(id: string): Promise<boolean> {
        const res = await this.model.collection.deleteOne({_id:id})
        return !!res.result.ok
    }
    async find(query: any): Promise<T[]> {
        const res = await this.model.collection.find(query)
        return res.toArray()
    }
    async findOne(id: string): Promise<T> {
        const res = await this.model.collection.findOne({_id:id})
        return res
    }
    
}