import express, {Request, Response} from "express";
import cors from "cors";
import mongoose = require("mongoose")
import {Farmer_router} from "./Routes/farmer.routes"
import {Account_Router} from "./Routes/account.routes"
const app = express()
app.use(cors());
app.use(express.json())
app.set("port",process.env.PORT||8007)
// app.use() 
app.get("/",(req:Request, res:Response)=>{
    res.status(200).send("You made it!\n<h1>Work in progress</h1>");
});

const uri:string = 'mongodb://127.0.0.1:27017'
const uric:string = "mongodb+srv://analogbeichibueze:atlasclouddb@cloud-db.amow0.azure.mongodb.net/AgroConnect?retryWrites=true&w=majority"
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true,dbName:"AgroConnect"},
(err)=>{
    if (err) {
        console.log(err.message)
    }else{
        console.log("Database successfully connected")
    }
});

app.listen(app.get("port"),()=>{
    console.log("Server started at port "+app.get("port"))
})

app.post("/",(req:Request,res:Response)=>{res.send("<h1>Work in progress</h1>")})
//API ENDPOINTS
//Farmer
app.use("/farmer",Farmer_router);
app.use("/account",Account_Router);