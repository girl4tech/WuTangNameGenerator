# Wu-Tang Name Generator
This is a web application that asks the user 5 survey questions. Based on their answers, the user receives their own personal Wu-Tang name.


**Link to project:**

![wu-tang-clan-name-generator project](https://tariqnaziri.github.io/wu-tang-name-generator/)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript ES6, Node

When I was building this app, I decided to experiment with what I know and try to take a creative approach as to how I would find my solution.
In HTML created five text inputs where the user would answer the questions provided, and one button that the user would click to generate their name. In JavaScript I created a function that takes in all of the values that the user types into the inputs and converts them into a single string, the value of the length of the string is then stored in a variable.
The function also creates another variable that contains a function that generates a random number. Both of these variables are then stored inside of another variable. The length of this variable is what will determine what name the user receives.

## Optimizations
I could have used a switch case instead, but I wanted the questions to be open ended so the names would be more personalized. I also wanted to try something creative and out of the box using string length to determine the outcomes. In the future, i will come back to this project to polish it up, substantially increase the amount of names to choose from and increase the element of randomness when names are chosen.
