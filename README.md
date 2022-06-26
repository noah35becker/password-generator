# Password generator
## Noah Becker

### [Github repo](https://github.com/noah35becker/password-generator/)

### [Live web application](https://noah35becker.github.io/password-generator/)
<br/>
************************************************************************

<br/>
<br/>

This code completes the weekly challenge for Module #3 in Columbia's Coding Bootcamp.


<br/>

I have created a random password generator.


<br/>

The user first selects a password length, between 8–128 characters, using either the interactive slider or its corresponding numeric input.

- The slider and numeric input mutually update each other's values in real time
- The slider is animated, whether updated directly (by dragging the slider itself) or indirectly (by adjusting the numeric input)
- The numeric input is adjusted by either:
    - typing in a number
    - clicking the input's ↑/↓ arrows (which appear when it's in focus)
    - pressing the ↑/↓ arrows on the keyboard (while the input is in focus)
- The user's numeric input is thoroughly validated


<br/>

The user then selects which types of characters they'd link to include in the generated password.


<br/>

Lastly, the user clicks the "Generate password" button. A password appears that matches their specified criteria.

- All generated passwords are pre-validated to ensure that they have at least one of each selected character type
- If the user hadn't selected any character types, an error message appears
- As long as password generation was successful (i.e. the user had at least one character type selected):
    - The "Generate Password" button auto-updates to read "Generate new password"
    - The password's "stats" appear (# of characters, types of characters included)
    - A "Copy to clipboard" button appears, which animates upon click


<br/>

The web application uses a responsive layout that adapts to different viewports and devices.


<br/>

I made use of multiple Git branches throughout the coding process. While this didn't serve any technical purpose—I am the only programmer on this project—it did give me the opportunity to practice observing good Git habits.


<br/>

Below are final screenshots of the final version of the web application:
- [ALL screenshots (zipped)](assets/final-screenshots/ALL-final-screenshots.zip)
<br/>
- [The application's initial state](assets/final-screenshots/initital-state.png)
<img src= assets/final-screenshots/initital-state.png width="300"/>
<br/>
- [The application showing a generated password](assets/final-screenshots/sample-password.png)
<img src= assets/final-screenshots/sample-password.png width="300"/>
- [The application showing an error message](assets/final-screenshots/error-msg.png)
<img src= assets/final-screenshots/error-msg.png width="300"/>



<br/>
– Noah