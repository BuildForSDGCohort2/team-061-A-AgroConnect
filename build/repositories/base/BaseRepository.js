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
    // temp!: Collection
    constructor(dbcontext) {
        this.model = dbcontext;
    }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.model.collection.insertOne(item);
            return res.insertedId;
        });
    }
    update(id, update) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.model.collection.findOneAndUpdate({ _id: id }, update);
            return res.value;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.model.collection.deleteOne({ _id: id });
            return !!res.result.ok;
        });
    }
    find(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.model.collection.find(query);
            return res.toArray();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.model.collection.findOne({ _id: id });
            return res;
        });
    }
}
exports.BaseRepository = BaseRepository;
