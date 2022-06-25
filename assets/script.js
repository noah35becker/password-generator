
//'NUMBER OF CHARACTERS' SLIDER/NUMBER INPUT
  var sliderItself = document.querySelector('#number-of-chars-slider');
  var sliderNumVal = document.querySelector('#number-of-chars-number-input');
  const minNumChars = parseInt(sliderItself.getAttribute('min'));
  const maxNumChars = parseInt(sliderItself.getAttribute('max'));

  //When slider itself is adjusted, adjust the corresponding number value simultaneously
    sliderItself.oninput = function(){
      sliderNumVal.value = this.value;
      sliderItself.blur();
    };

  //Function: When number value is adjusted, at the moment that the corresponding slider is also adjusted,
  //make its circle 'flash'
    function sliderFlash(){
      var activeElem = this.document.activeElement;

      sliderItself.focus();
      setTimeout(
        function(){
          activeElem.focus();
          sliderItself.blur();
        },
        '200')
      ;
    }

  //Function: Fixing user input for number of characters
    function fixNumCharsInput(){
      var origValue = sliderNumVal.value;

      var adjValue = Math.round(origValue);
      if (adjValue < minNumChars)
        adjValue = minNumChars;
      if (adjValue > maxNumChars)
        adjValue = maxNumChars;

      if (!(adjValue == origValue))
        sliderFlash();
      
      
      sliderNumVal.value = adjValue;
      sliderItself.value = adjValue;
    }

  //When number value is adjusted, adjust the corresponding slider SIMULTANEOUSLY
  //(only if number value is currently valid)
    sliderNumVal.oninput = function(){
      var finalVal = this.value;

      if (finalVal == Math.round(finalVal) && finalVal >= 8 && finalVal <= 128){
        sliderItself.value = finalVal;
        sliderFlash();
      }
    };
  
  //When user is adjusting number value with the input field's arrows (whether clicking them or using up/down arrow keys),
  //prevent number value from going out of bounds
    window.addEventListener('click',function(e){  
      e = e || window.event;
      if (e.target === sliderNumVal || e.srcElement === sliderNumVal)
        fixNumCharsInput();
    });
    window.addEventListener('keyup',function(e){
      if (sliderNumVal === this.document.activeElement)
        switch (e.key){
          case 'ArrowUp':
            if (sliderNumVal.value > 128)
              fixNumCharsInput();
            break;
          case 'ArrowDown':
            if (sliderNumVal.value < 8){
              fixNumCharsInput();
            }
            break;
        }
    });

  //After user completes number input by typing, if number value is invalid,
  //correct it to a valid value + adjust the slider accordingly
    sliderNumVal.addEventListener('blur', function(){
      fixNumCharsInput();
    });




//THE SET OF POSSIBLE CHARACTERS
  const CHARACTERS = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' !"#$%&()*+,-./:;<=>?@[]^_`{|}~' + "'" + '\\'
  }


//GENERATE PASSWORD FUNCTION
  function generatePassword(){

    //Variables
      var password;
      var eligibleChars;
      
      var passwordLength = sliderItself.value; //user validation is handled outside this function
      var useLowercase = document.querySelector('#lowercase').checked;
      var useUppercase = document.querySelector('#uppercase').checked;
      var useNumeric = document.querySelector('#numeric').checked;
      var useSpecial = document.querySelector('#special').checked;


    //Inner functions
      function atLeastOneCharType(){
        if (useLowercase || useUppercase || useNumeric || useSpecial)
          return true;
        return false;
      }
    
      function getEligibleChars(){
        var output = '';

        if (useLowercase)
          output += CHARACTERS.lowercase;
        if (useUppercase)
          output += CHARACTERS.uppercase;
        if (useNumeric)
          output += CHARACTERS.numeric;
        if (useSpecial)
          output += CHARACTERS.special;
          
        return output;
      }


      function build(){
        var output = '';

        for (i = 0; i < passwordLength; i++){
          var randIndex = Math.floor(Math.random() * eligibleChars.length);
          output += eligibleChars.substring(randIndex, randIndex + 1);
        }

        return output;
      }


      function allCharCategoriesPresent(){
        
        function checkAgainstBaseline(baseline){
          for (i = 0; i < password.length; i++)
            for (c = 0; c < baseline.length; c++)
              if (password.substring(i, i + 1) === baseline.substring(c, c + 1))
                return true;
                
          return false;
        }

        if(useLowercase && !checkAgainstBaseline(CHARACTERS.lowercase))
          return false;
        if(useUppercase && !checkAgainstBaseline(CHARACTERS.uppercase))
          return false;
        if(useNumeric && !checkAgainstBaseline(CHARACTERS.numeric))
          return false;
        if(useSpecial && !checkAgainstBaseline(CHARACTERS.special))
          return false;
        
        return true;

      }


    //Execute
      if (atLeastOneCharType()){
        eligibleChars = getEligibleChars();
        
        do
          password = build();
        while (!allCharCategoriesPresent());

        return password;
      }
      
      return false;
  }



//GET REFERENCES TO 'GENERATE PASSWORD' BUTTON
var generateBtn = document.querySelector('#generate');

//WRITE PASSWORD TO THE #password TEXTAREA
function writePassword(){
  
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  if (password){
    passwordText.style.color = 'black';
    passwordText.value = password;
  }
  else{
    passwordText.value = 'Error! You must check at least one type of character.';
    passwordText.style.color = window.getComputedStyle(generateBtn).getPropertyValue('background-color');
  }

}

//ADD EVENT LISTENER TO THE GENERATE BUTTON
generateBtn.addEventListener('click', writePassword);
