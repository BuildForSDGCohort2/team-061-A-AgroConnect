import {Response} from "express"
export let createResponse =(response:Response,Message:string,Data:any,status:number)=>{
    return response.status(status).send({Message:Message,Data:Data})
}