
// IMPORT
import {generateBtn} from './dom-elements.js';



function charTypesString(lowercase, uppercase, numeric, special){
    const charTypes = [];
    var index = 0;

    if (lowercase)
        charTypes[index++] = 'lowercase';
    if (uppercase)
        charTypes[index++] = 'uppercase';
    if (numeric)
        charTypes[index++] = 'numeric';
    if (special)
        charTypes[index] = 'special';

    return charTypes.join(', ');
}


export function updateSupplements(display, pw, lowercase, uppercase, numeric, special){
    if (display){
        var stats = pw.length + ' characters (' + charTypesString(lowercase, uppercase, numeric, special) + ')';
        document.querySelector('.pw-stats').innerHTML = stats;

        document.querySelector('.card-supplements').style.display = 'flex';
        generateBtn.innerHTML = 'Generate new password';
    }else{
        document.querySelector('.card-supplements').style.display = 'none';
        generateBtn.innerHTML = 'Generate password';
    }
}