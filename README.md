# Bird-Watchers-Paradise

## By Ivy Ronoh

### _Bird-Watchers-Paradise_ landing page

![Bird-Watchers-Paradise]

## Table of Content

- [Description](#description)
- [Features](#features)
- [Development](#development)
- [Live Link](#live-link)
- [Setup Instructions and Technology](#technology-used)
- [License](#license)

## Description

---

 _Bird-Watchers-Paradise_ is a web application meant to be help users turn their browsers into their best and most-used birding resource.

Spotted a bird? Identify it using the bird watchers paradise catalog that has a detailed explanation of what you’re seeing - allowing you to compare bird's distinct appearance and behavior to your current bird sighting.

Users can further upload their sighting to the bird watchers paradise gallery! Why not share the beauty with fellow bird watchers who can rate your bird watching skills?.

This is a _bird-watchers-paradise_ website with a front-end made using React and a backend made with Active records, Sinatra and Sqlite3. Active Record allowed us to create three models, _User_, _Bird_ and _Sighting_ that could communicate with the tables, _userss_, _birdss_ and _sightings_ in the Sqlite3 database with the help of migrations that I created. In each model there exists a defined Active Record associations for example:

> Bird has_many Sightings and has_many Users.

> Sightings has_one User and has_one Bird.

> User has_many Birds and has_many Sightings.

Sinatra helped in creating api endpoints that could be used by React frontend to get, post, delete and update the birds and its sightings. Through the use of routing methods that Sinatra provided like **get**, **post**, **patch** and **delete** Active Record and Sinatra also provided methods that could be used to initiate a new instance of the classes, _User_, _Bird_ and _RSighting_ and be able to associate them.

The front-end is diployed in [vercel](https://vercel.com/) hosting service while the Sinatra is hosted in [heroku](https://heroku.com/).

## Features

---

A user visiting this page would be able to see:

1. A home page populated with birds from different regions.

2. A top navigation section with links to view the bird database and the option to upload a sighting.

3. A user can filter birds by name or by characteristics and view the filtered cards.

4. A user can visit the upload sightings page and they are provided with tools to post, edit, and delete a sighting.


### Technology Used

---

- Used Visual Studio Code editor to create the front-end with _**React**_ and backend with _**Active Record**_, _**Sinatra**_, _**Sqlite3**_

- **Styled-components** - was used to create the structure and the styling of the website.

- **React** - help in creating interactive website

_**Active Record**_, _**Sinatra**_, _**Sqlite3**_ helped in creating the database, the three main models, Birds, Sightings, and User and their associations. Also in creating the tables _users_, _birdss_, and _sightingss_ and and routing to be used in the frontend by clients for _get_, _post_ and _delete_

---

## [Installation-Instructions]() 
### requirements:
- chrome browser/any other browser
- Internet connection
- Navigate to the git repository
- Fork  the repo using the fork button on this repository
- Git clone the forked repository to your local machine.
- Then perform the following two steps to run the Application:
#### BackEnd SetUP
- Open the backend folder on A terminal
- Then, run `bundle install` to install require gems
- run  (`bundle exec rake server`) to run the backend
#### FrontEnd SetUP
- Navigate to the frontEnd folder and open it in the terminal
- run (`npm start`) to run the applicationon the browser.
- Done..! the site is up and running locally.


## Development

---

Want to contribute? Excellent!

To enhance or contribute on the existing project, follow these steps:

- Fork the repo
- Create a new branch (git checkout -b enhance-feature)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (git commit -m 'Enhanced feature')
- Push to the branch (git push origin enhance-feature)
- Create a Pull Request

### Live Link

---

\- Click this link to see the live website

## License

---

MIT License

Copyright (c) [2022] [Ivy Ronoh]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.