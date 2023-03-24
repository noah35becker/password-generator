
const sliderItself = document.querySelector('#number-of-chars-slider');
const sliderNumVal = document.querySelector('#number-of-chars-number-input');
const MIN_NUM_CHARS = 8;
const MAX_NUM_CHARS = 128;



// On load, set min / max / value of slider
sliderItself.setAttribute('min', MIN_NUM_CHARS);
sliderItself.setAttribute('max', MAX_NUM_CHARS);
sliderItself.setAttribute('value', MIN_NUM_CHARS);

sliderNumVal.setAttribute('value', MIN_NUM_CHARS);



// Get length of the password about to be generated
export function getPasswordLength(){
    return sliderItself.value;
}


// When slider itself is adjusted, adjust the corresponding number value simultaneously
sliderItself.oninput = function(){
    sliderNumVal.value = this.value;
    sliderFlash();
};


// Make the slider's circle "flash" when its value is adjusted
function sliderFlash(){
    const activeElem = document.activeElement;

    // If number value input was focused before sliderFlash(), mask the fact that it temporarily loses focus
    if (activeElem === sliderNumVal)
        sliderNumVal.style.outline = window.getComputedStyle(sliderNumVal, ':focus-visible').getPropertyValue('outline');
    
    sliderItself.focus();

    setTimeout(() => {
        if (activeElem === sliderNumVal){
            sliderNumVal.removeAttribute('style'); // remove masking of number value input losing focus (described above)
            activeElem.focus();
        }
        sliderItself.blur();
    }, 200);
}


// Fix user input for number of characters
function fixNumCharsInput(){
    const origVal = sliderNumVal.value;

    let adjVal = Math.round(origVal);
    if (adjVal < MIN_NUM_CHARS)
        adjVal = MIN_NUM_CHARS;
    if (adjVal > MAX_NUM_CHARS)
        adjVal = MAX_NUM_CHARS;
    
    sliderNumVal.value = adjVal;
    sliderItself.value = adjVal;

    if (!(adjVal == origVal))
      sliderFlash();
}


// When number value is adjusted, adjust the corresponding slider simultaneously
// (only if number value is currently valid)
sliderNumVal.oninput = function(){
    const finalVal = this.value;

    if (
            finalVal == Math.round(finalVal)
        &&
            finalVal >= MIN_NUM_CHARS
        &&
            finalVal <= MAX_NUM_CHARS
    ){
        sliderItself.value = finalVal;
        sliderFlash();
    }
};


// When user is adjusting number value with the input field's arrows
// (whether by clicking input field's arrows, using up/down arrow keys on keyboard, or typing in a number),
// prevent number value from going out of bounds
window.addEventListener('click', function(e){  // clicking
    e = e || window.event;
    
    if (e.target === sliderNumVal)
        fixNumCharsInput();
});

sliderNumVal.addEventListener('keyup', function(e){  // up/down arrow keys
    switch (e.key){
        case 'ArrowUp':
        case 'ArrowDown':
            fixNumCharsInput();
    }
});

sliderNumVal.addEventListener('blur', () => {  // typing
    fixNumCharsInput();
});