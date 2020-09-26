/** 
 * makes the first letter of the word uppercase and makes other letters lowercase
*/

export function capitalizeFirstLetterOnly(word:string) {
    const capitalize =word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
    if (capitalize.length>1) {
        return capitalize
    }
    return null
}
