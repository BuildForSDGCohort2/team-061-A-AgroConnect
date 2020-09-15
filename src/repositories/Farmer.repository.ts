import {BaseRepository} from "./base/Base.repository";
import { Farmer } from "../entities/Farmer";
import {getModelForClass} from "@typegoose/typegoose";

export class FarmerRepository extends BaseRepository<Farmer>{
    
}