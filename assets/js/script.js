
  var password;
  // **** REDO REFERENCES TO THIS VARIABLE TO ALWAYS GRAB DIRECTLY FROM THE SCREEN



  // const CHARACTERS = {
  //   lowercase: 'abcdefghijklmnopqrstuvwxyz',
  //   uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  //   numeric: '0123456789',
  //   special: ' !"#$%&()*+,-./:;<=>?@[]^_`{|}~' + "'" + '\\'
  // }

  // var copyBtn = document.querySelector('#copy-to-clipboard');
  // var origCopyBtnText = copyBtn.innerHTML;

  // var generateBtn = document.querySelector('#generate');
  // var passwordText = document.querySelector('#password');


    
//GENERATE PASSWORD FUNCTION
  // function generatePassword(){

  //   //Variables
  //     var pw;
  //     var eligibleChars;
      
  //     var passwordLength = sliderItself.value;
  //     var useLowercase = document.querySelector('#lowercase').checked;
  //     var useUppercase = document.querySelector('#uppercase').checked;
  //     var useNumeric = document.querySelector('#numeric').checked;
  //     var useSpecial = document.querySelector('#special').checked;

  //   //Inner functions
  //     function atLeastOneCharType(){
  //       if (useLowercase || useUppercase || useNumeric || useSpecial)
  //         return true;
  //       return false;
  //     }
    
  //     // function getEligibleChars(){
  //     //   var output = '';

  //     //   if (useLowercase)
  //     //     output += CHARACTERS.lowercase;
  //     //   if (useUppercase)
  //     //     output += CHARACTERS.uppercase;
  //     //   if (useNumeric)
  //     //     output += CHARACTERS.numeric;
  //     //   if (useSpecial)
  //     //     output += CHARACTERS.special;
          
  //     //   return output;
  //     // }

  //     function build(){
  //       var output = '';
  //       var randIndex;

  //       for (i = 0; i < passwordLength; i++){
  //         randIndex = Math.floor(Math.random() * eligibleChars.length);
  //         output += eligibleChars.substring(randIndex, randIndex + 1);
  //       }

  //       return output;
  //     }

  //     function allCharCategoriesPresent(){ 
  //       function checkAgainstBaseline(baseline){
  //         for (i = 0; i < pw.length; i++)
  //           for (c = 0; c < baseline.length; c++)
  //             if (pw.substring(i, i + 1) === baseline.substring(c, c + 1))
  //               return true;

  //         return false;
  //       }

  //       if(useLowercase && !checkAgainstBaseline(CHARACTERS.lowercase))
  //         return false;
  //       if(useUppercase && !checkAgainstBaseline(CHARACTERS.uppercase))
  //         return false;
  //       if(useNumeric && !checkAgainstBaseline(CHARACTERS.numeric))
  //         return false;
  //       if(useSpecial && !checkAgainstBaseline(CHARACTERS.special))
  //         return false;
        
  //       return true;

  //     }

  //   //Execute
  //     if (atLeastOneCharType()){
  //       eligibleChars = getEligibleChars();
        
  //       do
  //         pw = build();
  //       while (!allCharCategoriesPresent());

  //       return pw;
  //     }
      
  //     return false;
  // }



//COPY TO CLIPBOARD BUTTON
  // function copyBtnReset(){
  //   copyBtn.innerHTML = origCopyBtnText;
  //   copyBtn.removeAttribute('style');
  // }

  // copyBtn.addEventListener('click', function(){
  //   var delay = 3000; //milliseconds
  //   var duration = 1000; //milliseconds

  //   navigator.clipboard.writeText(password);
    
  //   copyBtn.style.width = window.getComputedStyle(copyBtn).getPropertyValue('width');
  //   copyBtn.style.fontStyle = 'italic';
  //   copyBtn.innerHTML = 'Copied!';
  //   copyBtn.style.transition = 'color ' + duration + 'ms ease-in ' + delay + 'ms';
  //   copyBtn.style.color = window.getComputedStyle(copyBtn).getPropertyValue('background-color');

  //   setTimeout(copyBtnReset, delay + duration);
  // });



//ADD GENERATEPASSWORD() TO GENERATE BUTTON,
//INC. ERROR-CHECKING + DISPLAYING/UPDATING STATS AND COPY BUTTON
  // function updateSupplements(display){
  //   function charTypesString(){
  //     const charTypes = [];
  //     var index = 0;

  //     if (document.querySelector('#lowercase').checked)
  //       charTypes[index++] = 'lowercase';
  //     if (document.querySelector('#uppercase').checked)
  //       charTypes[index++] = 'uppercase';
  //     if (document.querySelector('#numeric').checked)
  //       charTypes[index++] = 'numeric';
  //     if (document.querySelector('#special').checked)
  //       charTypes[index] = 'special';

  //     return charTypes.join(', ');
  //   }
    
  //   if (display){
  //     var stats = password.length + ' characters (' + charTypesString() + ')';
  //     document.querySelector('.pw-stats').innerHTML = stats;

  //     document.querySelector('.card-supplements').style.display = 'flex';
  //     generateBtn.innerHTML = 'Generate new password';
  //   }else{
  //     document.querySelector('.card-supplements').style.display = 'none';
  //     generateBtn.innerHTML = 'Generate password';
  //   }
  // }
  


  // function writePassword(){    
  //   copyBtnReset();

  //   password = generatePassword();

  //   if (password){
  //     passwordText.style.color = 'black';
  //     passwordText.value = password;
  //     updateSupplements(true);
  //   }
  //   else{
  //     passwordText.style.color = window.getComputedStyle(generateBtn).getPropertyValue('background-color');
  //     passwordText.value = 'You must check at least one type of character.';
  //     updateSupplements(false);
  //   }
  // }

  // generateBtn.addEventListener('click', writePassword);