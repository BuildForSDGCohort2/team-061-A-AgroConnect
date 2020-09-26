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
class ProductRepository extends Base_repository_1.BaseRepository {
    // model = getModelForClass(Product)
    getProductsByFarmer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.find({ farmerID: id }).populate("category", "name");
            return result;
        });
    }
    getProductsByCategory(Category) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.find().populate("category", "name").in("category.name", Category);
            return result;
        });
    }
    restockProducts(id, stock, harvest) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    updateRestockStatus(id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.model.findById(id);
            if (product) {
                if (product.restockDetails) {
                    switch (status.toLowerCase()) {
                        case "awaiting":
                            product.restockDetails.status = Product_1.StatusEnum.AWAITING;
                            break;
                        case "stocked":
                            product.restockDetails.status = Product_1.StatusEnum.STOCKED;
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
        });
    }
}
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=Product.repository.js.map