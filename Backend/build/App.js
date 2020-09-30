"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose = require("mongoose");
const farmercontroller = __importStar(require("./Controllers/FarmerController"));
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.set("port", process.env.PORT || 8007);
// app.use()
app.get("/", (req, res) => {
    res.status(200).send("You made it!");
});
const uri = 'mongodb://127.0.0.1:27017';
const uric = "mongodb+srv://analogbeichibueze:chibueze321#@cloud-db.amow0.azure.mongodb.net/AgroConnect?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "AgroConnect" }, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Database successfully connected");
    }
});
app.listen(app.get("port"), () => {
    console.log("Server started at port " + app.get("port"));
});
app.get("/", (req, res) => { res.send("<h1>Work in progress</h1>"); });
//API ENDPOINTS
//Farmer
app.get("/famrers", farmercontroller.getFarmers);
app.post("/farmer", farmercontroller.createFarmer);
app.delete("/farmer/:id", farmercontroller.deleteFarmer);
