"use strict";
/**
 * makes the first letter of the word uppercase and makes other letters lowercase
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeFirstLetterOnly = void 0;
function capitalizeFirstLetterOnly(word) {
    const capitalize = word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase();
    if (capitalize.length > 1) {
        return capitalize;
    }
    return null;
}
exports.capitalizeFirstLetterOnly = capitalizeFirstLetterOnly;
//# sourceMappingURL=string.utils.js.map