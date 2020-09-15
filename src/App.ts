import express, {Request, Response} from "express";
import cors from "cors";
import mongoose = require("mongoose")

import {Account_Router} from "./Routes/account.routes"
import {Bid_Router} from "./Routes/bid.routes"
import {Category_Router} from "./Routes/category.routes"
import {Customer_Router} from "./Routes/customer.routes"
import {Farmer_router} from "./Routes/farmer.routes"
import {Order_Router} from "./Routes/order.routes"
import {Product_Router} from "./Routes/product.routes"
import {Request_Router} from "./Routes/request.routes"
import {Tag_Router} from "./Routes/tag.routes"
import { MongoDBAtlasdatabase,MongoDBAtlaspassword,MongoDBAtlasusername } from "./Utils/secret";

const app = express()
app.use(cors());
app.use(express.json())
app.set("port",process.env.PORT||8007)
// app.use() 
app.get("/",(req:Request, res:Response)=>{
    res.status(200).send("You made it!\n<h1>Work in progress</h1>");
});

const uri:string = 'mongodb://127.0.0.1:27017' //local
const uric:string = "mongodb+srv://"+MongoDBAtlasusername+":"+MongoDBAtlaspassword+"-db.amow0.azure.mongodb.net/"+MongoDBAtlasdatabase+"?retryWrites=true&w=majority"
mongoose.connect(uric,{useNewUrlParser:true,useUnifiedTopology:true,dbName:"AgroConnect"},
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

//Account
app.use("/account",Account_Router);
//Bid
app.use("/bid",Bid_Router)
//Category
app.use("/category",Category_Router)
//Customer
app.use("/customer",Customer_Router)
//Farmer
app.use("/farmer",Farmer_router);
//Order
app.use("/order",Order_Router)
//Product
app.use("/product",Product_Router)
//Request
app.use("/request",Request_Router)
//Tag
app.use("/tag",Tag_Router)