## Modular Personal Website

This is a modular personal website that allow me to 
add/delete/edit information in a modular way. Details see below.

## Table of Contents
  
* [Inspiration](#inspiration)
* [Features](#features)
* [How to use](#how-to-use)
* [Dependency/library List](#dependencylibrary-list)
* [Development Logs](#development-logs)
    * [Sept 20](#sept-20)
    * [Sept 21-22](#sept-21-22)
    * [Sept 23-29](#sept-23-29)
    * [Sept 30](#sept-30)
    * [Oct 1-2](#oct-1-2)
    * [Oct 3-5](#oct-3-5)
    * [Oct 8-9 (Finished)](#oct-8-9-finished)

## Inspiration
I was inspired to build this app when I was building my personal website. I feel like it is not efficient to directly modify the website's codes every time I need to change something. Therefore, I built this app that has an interface thats allow me to change information, and automatically translate the information changed into a modern and responsive personal website.

## Features
* Provided a seperate user interface website that has:
	* User login system using username and password
	* Allow users to modify their personal website in a modular way
		* Allow users to add/delete/edit projects including: name, description, details in list form, github link, and website link.
		* Allow users to add/delete/edit about me content.
	* Easy to navigate and manage
	* Tables of previously added information
	* Easy to expand if want to add more modules (e.g. courses table, hobbies gallery...) into the website
* Generated a Modern, beautiful and responsive website.



## How to use
Website built with this tool is hosted on heroku, [Link](https://ffy-modular-personal-website.herokuapp.com/)

**Login, protected routes Demo**
<img src="./readme-assets/login_demo.gif" alt="demo">

**Add/Delete project Demo**
<img src="./readme-assets/add_delete_project.gif" alt="demo">

**Add project links Demo**
<img src="./readme-assets/add_link.gif" alt="demo">

**Edit project Demo**  
<img src="./readme-assets/edit_project.gif" alt="demo">

**Add/Delete about me Demo**
<img src="./readme-assets/about_add_delete.gif" alt="demo">

**Edit about me Demo**
<img src="./readme-assets/edit_about.gif" alt="demo">

**Finished product Demo**
<img src="./readme-assets/done.gif" alt="demo">

## Dependency/library List
Dependencies:
* Express
* Pug
* mongoose
* express-session
* connect-mongo
* connect-flash
* passport
* passport_local  
* bootstrap  

devDependencies:
* dotenv
* nodemon

## Development Logs

#### Sept 20
1. Initialized project, created entry file app.js and package.json
2. Brainstormed some ideas of how to approach this problem, and what the design show be looking like.
3. Think of what packages/libraries might be useful

#### Sept 21-22
1. Using bootstrap and pug to design and create the basic layout of the website
2. decide to first include the ability to add/delete projects
3. initialize app.js to setup express, express-session, mongoose, connect-mongo

#### Sept 23-29
Paused project because of school work

#### Sept 30
1. Add more design into the interface to make the interface more modern
2. Finished add/delete projects functionality 
3. Deleted some dev comments

#### Oct 1-2
1. Decided to add
	* user registration/login system
	* functionality that allows users to edit previous added projects
	* functionality that allows users to add/delete/edit about-me content
2. Designed the layout of the websites that are generated by the interface tool

#### Oct 3-5
1. Added the functionality that allows users to edit previous added projects
2. Added demo into README

#### Oct 8-9 (Finished)
1. Finished user registration/login system
2. Added the functionality that allows users to add/delete/edit about-me content
3. Added demos into README
