
// IMPORT
import {passwordText} from './dom-elements.js'; 

const copyBtn = document.querySelector('#copy-to-clipboard');
const origText = 'Copy to clipboard';



export function copyBtnReset(){
    copyBtn.innerHTML = origText;
    copyBtn.removeAttribute('style');  // as applied in the event listener below
}


copyBtn.addEventListener('click', function(){
    const delay = 3000; // ms
    const duration = 1000; // ms

    navigator.clipboard.writeText(passwordText.value);
    
    // Change text
    copyBtn.style.width = window.getComputedStyle(copyBtn).getPropertyValue('width');  // prevent width of button from changing
    copyBtn.style.fontStyle = 'italic';
    copyBtn.innerHTML = 'Copied!';

    // Fade back to original text
    copyBtn.style.transition = `color ${duration}ms ease-in ${delay}ms`;
    copyBtn.style.color = window.getComputedStyle(copyBtn).getPropertyValue('background-color');
    setTimeout(copyBtnReset, delay + duration);
});


// On page load, set copy button text
copyBtn.innerHTML = origText;