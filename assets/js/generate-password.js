
// IMPORTS
import {getPasswordLength} from './slider.js';
import {CHARACTERS, getEligibleChars} from './characters.js';
import {updateSupplements} from './password-stats.js';
import {copyBtnReset} from './copy-to-clipboard.js';
import {generateBtn, passwordText} from './dom-elements.js';



function atLeastOneCharType(lowercase, uppercase, numeric, special){
    return lowercase || uppercase || numeric || special;
}


function build(eligibleChars){
    const passwordLength = getPasswordLength();

    let output = '';
    for (let i = 0; i < passwordLength; i++)
        output += eligibleChars[Math.floor(Math.random() * eligibleChars.length)];

    return output;
}


function checkAgainstBaseline(pw, baseline){
    for (let i = 0; i < pw.length; i++)
        for (let c = 0; c < baseline.length; c++)
            if (pw.substring(i, i + 1) === baseline.substring(c, c + 1))
                return true;

    return false;
}


function allCharCategoriesPresent(pw, lowercase, uppercase, numeric, special){ 
    if(lowercase && !checkAgainstBaseline(pw, CHARACTERS.lowercase))
        return false;
    if(uppercase && !checkAgainstBaseline(pw, CHARACTERS.uppercase))
        return false;
    if(numeric && !checkAgainstBaseline(pw, CHARACTERS.numeric))
        return false;
    if(special && !checkAgainstBaseline(pw, CHARACTERS.special))
        return false;
    
    return true;
}


function generatePassword(lowercase, uppercase, numeric, special){
    let pw;
    const eligibleChars = getEligibleChars(lowercase, uppercase, numeric, special);
    
    do
        pw = build(eligibleChars);
    while (!allCharCategoriesPresent(pw, lowercase, uppercase, numeric, special));
    
    return pw;
}


function writePassword(lowercase, uppercase, numeric, special){
    copyBtnReset();

    if (atLeastOneCharType(lowercase, uppercase, numeric, special)){
        const pw = generatePassword(lowercase, uppercase, numeric, special);
        passwordText.style.color = 'black';
        passwordText.value = pw;
        updateSupplements(true, pw, lowercase, uppercase, numeric, special);
    }else{
        passwordText.style.color = window.getComputedStyle(generateBtn).getPropertyValue('background-color');
        passwordText.value = 'You must check at least one type of character.';
        updateSupplements(false);
    }
}
generateBtn.addEventListener('click', () => writePassword(
    document.querySelector('#lowercase').checked,
    document.querySelector('#uppercase').checked,
    document.querySelector('#numeric').checked,
    document.querySelector('#special').checked
));