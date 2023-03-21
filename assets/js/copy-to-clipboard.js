
// IMPORT
import {passwordText} from './dom-elements.js'; 


const copyBtn = document.querySelector('#copy-to-clipboard');
const origCopyBtnText = copyBtn.innerHTML;


export function copyBtnReset(){
    copyBtn.innerHTML = origCopyBtnText;
    copyBtn.removeAttribute('style');
}


copyBtn.addEventListener('click', function(){
    var delay = 3000; //milliseconds
    var duration = 1000; //milliseconds

    navigator.clipboard.writeText(passwordText.value);
    
    copyBtn.style.width = window.getComputedStyle(copyBtn).getPropertyValue('width');
    copyBtn.style.fontStyle = 'italic';
    copyBtn.innerHTML = 'Copied!';
    copyBtn.style.transition = 'color ' + duration + 'ms ease-in ' + delay + 'ms';
    copyBtn.style.color = window.getComputedStyle(copyBtn).getPropertyValue('background-color');

    setTimeout(copyBtnReset, delay + duration);
});