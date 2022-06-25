
//'NUMBER OF CHARACTERS' SLIDER
  var slider = document.querySelector('#number-of-letters');
  var sliderVal = document.querySelector('#slider-val');
  sliderVal.innerHTML = slider.value; //displays inital slider value

  slider.oninput = function(){
    sliderVal.innerHTML = this.value;
  }


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
      
      var passwordLength = slider.value; //no validation required bc value retrieved from a slider
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
function writePassword() {
  
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
