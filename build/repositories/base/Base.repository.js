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
exports.BaseRepository = void 0;
class BaseRepository {
    // temp = getModelForClass(Farmer)
    constructor(dbcontext) {
        this.model = dbcontext;
    }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.model.create(item);
                // const res = await this.model.collection.insertOne(item)
                return res._id;
            }
            catch (error) {
                return null;
            }
        });
    }
    update(id, update) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.model.findByIdAndUpdate(id, update, { useFindAndModify: false, new: true, select: { password: 0 } });
                // console.log(res)
                // const res = await this.model.collection.findOneAndUpdate({_id:id},update)
                return res;
            }
            catch (error) {
                return null;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.model.findByIdAndDelete(id);
                // const res = await this.model.collection.deleteOne({_id:id})
                return Boolean(res);
            }
            catch (error) {
                return false;
            }
        });
    }
    find(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.model.find(query, { password: 0 });
                // console.log(res.length)
                // const res = await this.model.collection.find(query)
                return res;
            }
            catch (error) {
                return null;
            }
        });
    }
    findOne(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.model.findOne(query, { password: 0 });
                // console.log(res)
                // const res = await this.model.collection.findOne(query)
                return res;
            }
            catch (error) {
                return null;
            }
        });
    }
    findN(query, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.model.find(query, null, { limit: limit });
                return res;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=Base.repository.js.map