

var slider = document.querySelector('#number-of-letters');
var sliderVal = document.querySelector('#slider-val');
sliderVal.innerHTML = slider.value; //displays inital slider value

slider.oninput = function(){
  sliderVal.innerHTML = this.value;
}



const CHARACTERS = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numeric: '0123456789',
  special: ' !"#$%&()*+,-./:;<=>?@[]^_`{|}~' + "'" + '\\'
}


function generatePassword(){

  //DECLARE VARIABLES
    var password;
    var eligibleChars;
    
    var passwordLength = 10; //test value
    var useLowercase = true; //test value
    var useUppercase = true; //test value
    var useNumeric = true; //test value
    var useSpecial = true; //test value

  
  //DECLARE INNER FUNCTIONS
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


  //EXECUTE
    eligibleChars = getEligibleChars();
    
    do
      password = build();
    while (!allCharCategoriesPresent());

    return password;
}




// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
