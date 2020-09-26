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
            const result = yield this.model.find().populate("niche", "name").where("niche.name").in(Niche);
            // const result = await this.model.find({niche:{$in:Niche}})
            return result;
        });
    }
    //TODO: GET BY COUNTRY
    getFarmersinCountry(country) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.find({ "address.country": country });
            return result;
        });
    }
    //TODO: GET BY COUNTRY AND STATE
    getFarmersinCountryandState(country, state) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.find({ "address.country": country, "address.state": state });
            return result;
        });
    }
    //TODO: FIND/Search BY ORG
    searchByOrganization(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.find({ organization: /organization/i });
            return result;
        });
    }
    //TODO: Rate a farmer
    rateFarmer(id, rating) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
}
exports.FarmerRepository = FarmerRepository;
//# sourceMappingURL=Farmer.repository.js.map