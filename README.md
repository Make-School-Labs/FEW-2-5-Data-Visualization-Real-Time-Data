# FEW 2.5 Real time data project 

This repo contains some starter code you can use to get started on your real time data exploration. 

The code in this repo creates an audio visualizer built with JavaScript. 

## Getting started 

The repo contains HTML and JS files along with a couple sample sound files. Since the sounds are loaded from the `file:///` route you'll get a CORS error if you open the HTML from your desktop. To solve this be sure to run the files from a local server. If you're using VSCode install LiveServer. 

## Editing the code 

This project is setup to run from `index.html`. The main program is in `main.js`. The rendering process that vidsualizes the audio is broken up into separate modules. 

Each rendering module is a function that takes the frequency array and canvas context as a arguments. Sometimes there are other arguments if needed. Take a look at the comments in each of these files for notes. 


 
