# Wu-Tang Clan Name Generator
This To-Do List is a simple web app that I've been using for myself over the past few days. The list is interactive and allows a user to add or remove list items. List items can also be marked as completed, and any items that are marked as completed can be removed collectively. The slight challenge I had behind this to-do list, was storing the interface somewhere, without a server-side, so that the app doesn't reset each time it is opened, or the browser gets refreshed. Although there are a few ways to do this, for example by using cookies, I leveraged local storage.

**Link to project:** http://live-demos.com/

![alt tag](https://github.com/karina001/WuTangNameGenerator/blob/master/Screen%20Shot%202018-03-12%20at%206.12.48%20AM.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

The local storage aspect of this project was an initial challenge as I had not worked with this browser object before. In order to work with the Local Storage object, I modified its setItem() and getItem() methods, which ended up being surprisingly easier than anticipated.

## Optimizations
If I had more time I would go back and add better styling to the list to make it look more modern and less retro. I am also planning on making the list full-stack by using Express JS. 

## Lessons Learned:
In completing this project I learned a lot about built-in browser variables liked Local Storage. I also learned more about the client-server model, when reviewing concepts such as the fact that HTTP is stateless, which causes an application to reset the next time it is re-opened. As a developer, I needed to store the state of your interface somewhere. Although this is normally done on the server-side, I didn't want to force people to sign up to use the app. This is one of the main reasons I decided to leverage local storage.



## Examples:
Take a look at other examples that I have in my own portfolio:

**Spanish Colors Memory Game:** https://github.com/karina001/spanishColorsMemoryGame

**WuTangClan Name Generator:** https://github.com/karina001/toDoList

**Speech Recognition App:** https://github.com/karina001/speechRecognitionApp
