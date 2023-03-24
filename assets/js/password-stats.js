
// IMPORT
import {generateBtn} from './dom-elements.js';



function charTypesString(lowercase, uppercase, numeric, special){
    const charTypes = [];

    if (lowercase)
        charTypes.push('lowercase');
    if (uppercase)
        charTypes.push('uppercase');
    if (numeric)
        charTypes.push('numeric');
    if (special)
        charTypes.push('special');

    return charTypes.join(', ');
}


export function updateSupplements(display, pw, lowercase, uppercase, numeric, special){
    if (display){
        const stats = pw.length + ' characters (' + charTypesString(lowercase, uppercase, numeric, special) + ')';
        document.querySelector('.pw-stats').innerHTML = stats;

        document.querySelector('.card-supplements').style.display = 'flex';
        generateBtn.innerHTML = 'Generate new password';
    }else{
        document.querySelector('.card-supplements').style.display = 'none';
        generateBtn.innerHTML = 'Generate password';
    }
}