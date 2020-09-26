"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResponse = void 0;
exports.createResponse = (response, Message, Data, status) => {
    return response.status(status).send({ Message: Message, Data: Data });
};
//# sourceMappingURL=Response.custom.js.map