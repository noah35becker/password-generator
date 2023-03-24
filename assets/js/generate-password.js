
// IMPORTS
import {getPasswordLength} from './slider.js';
import {getEligibleChars} from './characters.js';
import {updateStats} from './password-stats.js';
import {copyBtnReset} from './copy-to-clipboard.js';
import {generateBtn, passwordText} from './dom-elements.js';



// Ensure that user has selected at least one char category
function atLeastOneCharCategory(lowercase, uppercase, numeric, special){
    return lowercase || uppercase || numeric || special;
}


// Build a random password (not yet validated)
function build(eligibleChars){
    const passwordLength = getPasswordLength();

    let output = '';
    for (let i = 0; i < passwordLength; i++)
        output += eligibleChars[Math.floor(Math.random() * eligibleChars.length)];

    return output;
}


// Check that password contains at least one char of the given category
function checkAgainstBaseline(pw, baseline){
    switch (baseline){
        case 'lowercase':
            return /[a-z]/.test(pw);
        case 'uppercase':
            return /[A-Z]/.test(pw);
        case 'numeric':
            return /[0-9]/.test(pw);
        case 'special':
            return /\W/.test(pw);
    }
}


// Confirm that each char category that the user selected is represented by at least one char in the password
function allCharCategoriesPresent(pw, lowercase, uppercase, numeric, special){ 
    if(lowercase && !checkAgainstBaseline(pw, 'lowercase'))
        return false;
    if(uppercase && !checkAgainstBaseline(pw, 'uppercase'))
        return false;
    if(numeric && !checkAgainstBaseline(pw, 'numeric'))
        return false;
    if(special && !checkAgainstBaseline(pw, 'special'))
        return false;
    
    return true;
}


// Generate random password, validating that each char category that the user selected is represented by at least one char
function generatePassword(lowercase, uppercase, numeric, special){
    let pw;
    const eligibleChars = getEligibleChars(lowercase, uppercase, numeric, special);
    
    do
        pw = build(eligibleChars);
    while (!allCharCategoriesPresent(pw, lowercase, uppercase, numeric, special));
    
    return pw;
}


// Write random password to screen
function writePassword(lowercase, uppercase, numeric, special){
    copyBtnReset();

    if (atLeastOneCharCategory(lowercase, uppercase, numeric, special)){
        const pw = generatePassword(lowercase, uppercase, numeric, special);
        passwordText.style.color = 'black';
        passwordText.value = pw;
        updateStats(true, pw, lowercase, uppercase, numeric, special);
    }else{
        passwordText.style.color = window.getComputedStyle(generateBtn).getPropertyValue('background-color');
        passwordText.value = 'You must check at least one type of character.';
        updateStats(false);
    }
}
generateBtn.addEventListener('click', () => writePassword(
    document.querySelector('#lowercase').checked,
    document.querySelector('#uppercase').checked,
    document.querySelector('#numeric').checked,
    document.querySelector('#special').checked
));