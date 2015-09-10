### What is this repository for? ###

this is an app that will eventually take a floor plan and allow you to arange furniture on it. you will be able to share the link with your friends and then colaborate together, as long as the url link is not lost. 

## Version ##
currently on version 0.0.2 still in development. 

### How do I get set up? ###

*what you need to get started is to clone this repo to your local machine. one of the branches includes ajax calls, this is the reason why some of this repo is in php: to handle server side code. the latest branch/version is entirely javascript so you will need the following files 


```
#!javascript

->furniture-data/
|-->file.js
|-->index.php
```

this version is written with the aid of jquery, and a html5 canvas library named fabric.js. 
for review of this library check out [fabric.js](http://fabricjs.com/)
this code is by no means clean, as it is heavily under development. but I will clean up house as I go along.

the basic idea of what the javascript code is doing is that. first it looks for any data that is being send over the URL, and decodes it to create several objects on the canvas to represent the data. you also have the option after this to change the objects on the canvas which will show in the data afterwards on the console. you can add new objects to the canvas using the 'new couch' button, which will be added to the array of old objects already on the canvas. 

eventually these squares should contain images of actual furniture, and the background will be a floorplan. 

for the moment this is a proof of concept.