import express, {Request, Response} from "express";
import cors from "cors";
import mongoose = require("mongoose")
import * as farmercontroller from "./Controllers/FarmerController"

const app = express()
app.use(cors());
app.use(express.json())
app.set("port",process.env.PORT||8007)
// app.use()
app.get("/",(req:Request, res:Response)=>{
    res.status(200).send("You made it!");
});

const uri:string = 'mongodb://127.0.0.1:27017'
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

//API ENDPOINTS
//Farmer
app.get("/famrers",farmercontroller.getFarmers);
app.post("/farmer",farmercontroller.createFarmer);
app.delete("/farmer/:id",farmercontroller.deleteFarmer);