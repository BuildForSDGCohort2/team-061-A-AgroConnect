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
exports.BidRepository = void 0;
const Base_repository_1 = require("./base/Base.repository");
class BidRepository extends Base_repository_1.BaseRepository {
    //  model = getModelForClass(Bid)
    //TODO GET BIDS BY FARMER returnType = Bid[]
    //TODO GET BIDS BY REQUEST returnType = Bid[]
    //*SORT IN ACCEDING ORDER OF STATUS (add the .sort method after every query, sha text me if you dont understand)
    //* async functionName(param1:type1,...,paramN:typeN):Promise<returnType>{}
    getBidsByFarmer(Farmer) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.find({ farmer: Farmer }).populate("request").sort({ status: 1 });
            return result;
        });
    }
    getBidsByRequest(Request) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.find({ request: Request }).populate("request").sort({ status: 1 });
            return result;
        });
    }
}
exports.BidRepository = BidRepository;
//# sourceMappingURL=Bid.repository.js.map