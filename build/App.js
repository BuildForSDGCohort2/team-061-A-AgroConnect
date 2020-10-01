"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose = require("mongoose");
const account_routes_1 = require("./Routes/account.routes");
const bid_routes_1 = require("./Routes/bid.routes");
const category_routes_1 = require("./Routes/category.routes");
const customer_routes_1 = require("./Routes/customer.routes");
const farmer_routes_1 = require("./Routes/farmer.routes");
const order_routes_1 = require("./Routes/order.routes");
const product_routes_1 = require("./Routes/product.routes");
const request_routes_1 = require("./Routes/request.routes");
const tag_routes_1 = require("./Routes/tag.routes");
const secret_1 = require("./Utils/secret");
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.set("port", process.env.PORT || 8007);
// app.use() 
app.get("/", (req, res) => {
    res.status(200).send("You made it!\n<h1>Work in progress</h1>");
});
const uri = 'mongodb://127.0.0.1:27017'; //local
const uric = "mongodb+srv://" + secret_1.MongoDBAtlasusername + ":" + secret_1.MongoDBAtlaspassword + "-db.amow0.azure.mongodb.net/" + secret_1.MongoDBAtlasdatabase + "?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true, dbName: "AgroConnect" }, (err) => {
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
app.post("/", (req, res) => { res.send("<h1>Work in progress</h1>"); });
//API ENDPOINTS
//Account
app.use("/account", account_routes_1.Account_Router);
//Bid
app.use("/bid", bid_routes_1.Bid_Router);
//Category
app.use("/category", category_routes_1.Category_Router);
//Customer
app.use("/customer", customer_routes_1.Customer_Router);
//Farmer
app.use("/farmer", farmer_routes_1.Farmer_router);
//Order
app.use("/order", order_routes_1.Order_Router);
//Product
app.use("/product", product_routes_1.Product_Router);
//Request
app.use("/request", request_routes_1.Request_Router);
//Tag
app.use("/tag", tag_routes_1.Tag_Router);
//# sourceMappingURL=App.js.map