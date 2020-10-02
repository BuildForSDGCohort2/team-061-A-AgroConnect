"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const Base_repository_1 = require("./base/Base.repository");
const Product_1 = require("../entities/Product");
const typegoose_1 = require("@typegoose/typegoose");
class ProductRepository extends Base_repository_1.BaseRepository {
    constructor() {
        super(...arguments);
        this.model = typegoose_1.getModelForClass(Product_1.Product);
    }
    getProductsByFarmer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.model.find({ farmerID: id }).populate("category", "name");
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
    getProductsByCategory(Category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.model.find({}).populate({
                    path: "category",
                    match: { "name": { $in: Category } }
                });
                return result;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    restockProducts(id, stock, harvest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield this.model.findById(id);
                if (product) {
                    if (product.restockDetails) {
                        if (product.restockDetails.status == Product_1.StatusEnum.AWAITING) {
                            product.restockDetails.expectedStock = Number(product.restockDetails.expectedStock) + stock;
                            product.restockDetails.harvestDate = harvest;
                        }
                        else {
                            product.restockDetails.expectedStock = stock;
                            product.restockDetails.harvestDate = harvest;
                            product.restockDetails.status = Product_1.StatusEnum.AWAITING;
                        }
                    }
                    else {
                        product.restockDetails = { harvestDate: harvest, expectedStock: stock, status: Product_1.StatusEnum.AWAITING };
                    }
                    const result = yield product.save();
                    return result;
                }
                return null;
            }
            catch (error) {
                return null;
            }
        });
    }
    updateRestockStatus(id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield this.model.findById(id);
                if (product) {
                    if (product.restockDetails) {
                        switch (status.toLowerCase()) {
                            case "awaiting":
                                product.restockDetails.status = Product_1.StatusEnum.AWAITING;
                                break;
                            case "stocked":
                                if (product.restockDetails.expectedStock) {
                                    product.restockDetails.status = Product_1.StatusEnum.STOCKED;
                                    if (product.stock) {
                                        product.stock += product.restockDetails.expectedStock;
                                    }
                                    else {
                                        product.stock = product.restockDetails.expectedStock;
                                    }
                                }
                                break;
                            case "unfulfilled":
                                product.restockDetails.status = Product_1.StatusEnum.UNFULFILLED;
                                break;
                            default:
                                product.restockDetails.status = Product_1.StatusEnum.NONE;
                                break;
                        }
                        const result = yield product.save();
                        return result;
                    }
                    return null;
                }
                return null;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=Product.repository.js.map