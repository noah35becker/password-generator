
export const CHARACTERS = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' !"#$%&()*+,-./:;<=>?@[]^_`{|}~' + "'" + '\\'
}


export function getEligibleChars(lowercase, uppercase, numeric, special){
    var output = '';

    if (lowercase)
        output += CHARACTERS.lowercase;
    if (uppercase)
        output += CHARACTERS.uppercase;
    if (numeric)
        output += CHARACTERS.numeric;
    if (special)
        output += CHARACTERS.special;
      
    return output;
}