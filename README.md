### What is this repository for? ###

this is an app that will eventually take a floor plan and allow you to arange furniture on it. you will be able to share the link with your friends and then colaborate together, as long as the url link is not lost. 

## Version ##
there are four versions in this repo

the master branch has a working version of the technology stack, which involves ```html```, ```javascript```, ```jquery```, and a library called ```fabric.js```

branch ```ajax-php1.0.0``` is a deprecated version of the app that uses ```mysql``` and ajax calls to save data, you will have to set up a database to run properly

branches named ``` javascript-url-params``` with a release number behind them are the latest builds of the web app, and are generally unstable. release ```1.0.1``` is an earlier version which uses colored squares to represent furniture. realease ```1.0.0``` (while should be the earlier version) is under active development and will eventually support images instead of representative colored squares


### How do I get set up? ###

clone this repo from the master branch to your local machine. you will need the following files


```
#!javascript

->furniture-data/
|-->file.js
|-->index.html
|->image-files.png*
```

this version is written with the aid of jquery, and a html5 canvas library named fabric.js. 
for review of this library check out [fabric.js](http://fabricjs.com/)
this code is by no means clean, as it is heavily under development. but I will clean up house as I go along.

file.js looks for any data that is being send over the URL, and decodes it to create several objects on the canvas to represent the data. you also have the option after this to change the objects orientation on the canvas which will update the data afterwards on the console. you can add new objects to the canvas by interacting with the UI. when data is saved, it is then ported over through the URL again with new objects and updated perameters. 

eventually these squares should contain images of actual furniture, and the background will be a floorplan. 

for the moment this is a proof of concept.