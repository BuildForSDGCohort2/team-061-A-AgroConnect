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
exports.FarmerRepository = void 0;
const Base_repository_1 = require("./base/Base.repository");
class FarmerRepository extends Base_repository_1.BaseRepository {
    // model = getModelForClass(Farmer)
    //TODO: GET BY NICHE
    getFarmersbyNiche(Niche) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this.model.find({ niche: { $in: Niche } }).populate("niche", "name");
                //  result = result.where("niche").in(Niche)
                // const result = await this.model.find()
                return result;
            }
            catch (error) {
                // console.log(error)
                return null;
            }
        });
    }
    //TODO: GET BY COUNTRY
    getFarmersinCountry(country) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.model.find({ "address.country": country });
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
    //TODO: GET BY COUNTRY AND STATE
    getFarmersinCountryandState(country, state) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.model.find({ "address.country": country, "address.state": state });
                return result;
            }
            catch (error) {
                return null;
            }
        });
    }
    //TODO: FIND/Search BY ORG
    searchByOrganization(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let regexp = `.*${organization}.*`;
                let exp = new RegExp(regexp, 'i');
                const result = yield this.model.find({ organization: exp });
                // await this.model.aggregate([{$match:{$expr:{$gt:[{$indexOfCP:["$organization",organization]},-1]}}},{$project:{password:0}}])
                return result;
            }
            catch (error) {
                //    console.log(error)
                return null;
            }
        });
    }
    //TODO: Rate a farmer
    rateFarmer(id, rating) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.model.findById(id);
                if (result) {
                    result.rating.score += rating;
                    result.rating.scored += 1;
                    const newresult = yield result.save();
                    return newresult.rating;
                }
                else {
                    return null;
                }
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.FarmerRepository = FarmerRepository;
//# sourceMappingURL=Farmer.repository.js.map