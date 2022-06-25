
//'NUMBER OF CHARACTERS' SLIDER / NUMBER INPUT
  var sliderItself = document.querySelector('#number-of-chars-slider');
  var sliderNumVal = document.querySelector('#number-of-chars-number-input');

  //When slider itself is adjusted, adjust the corresponding number value
    sliderItself.oninput = function(){
      sliderNumVal.value = this.value;
    }

  //When number value is adjusted, adjust the corresponding slider (only if number value is currently valid)
    sliderNumVal.oninput = function(){
      var finalVal = this.value;

      if (finalVal == Math.round(finalVal) && finalVal >= 8 && finalVal <= 128)
        sliderItself.value = finalVal;
    }
  
  //After user completes number input, if number value is invalid,
  //correct it to a valid value + adjust the slider accordingly
    sliderNumVal.addEventListener('focusout', function(){
      console.log('focusout is being called!');
      
      var finalVal = this.value;
      
      finalVal = Math.round(finalVal);
      if (finalVal < 8)
        finalVal = 8;
      if (finalVal > 128)
        finalVal = 128;

      sliderNumVal.value = finalVal;
      sliderItself.value = finalVal;
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
