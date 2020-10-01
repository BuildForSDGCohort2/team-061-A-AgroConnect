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
exports.RequestRepository = void 0;
const Base_repository_1 = require("./base/Base.repository");
class RequestRepository extends Base_repository_1.BaseRepository {
    //TODO ACCEPT BID returnType = Request
    //TODO GET ALL OPEN BIDS (BULK) returnType = Request[]
    //TODO GET BY TAGS (OPEN BULK)  returnType = Request[]
    //* async functionName(param1:type1,...,paramN:typeN):Promise<returnType>{}
    // model = getModelForClass(Request);
    acceptedBid(requestid) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.model.findByIdAndUpdate(requestid, { acceptedBid: true }, { new: true });
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
    getOpenRequests() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.model.find({ acceptedBid: false });
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
    getRequestByTags(tags) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.model.find({ tags: { $in: tags }, acceptedBid: false });
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
    getRequestByCustomer(Customer) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.find({ customer: Customer });
            return result;
        });
    }
}
exports.RequestRepository = RequestRepository;
//# sourceMappingURL=Request.repository.js.map