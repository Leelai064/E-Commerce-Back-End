# E-Commerce-Back-End

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

# Table of Contents
1.  [Description](#description)
2.  [GithubLink](#github-link)
3.  [Installation](#installation)
4.  [Demo](#walkthrough-link)
5.  [Features](#features)

## Description

With given starter code, this project will build a better understanding of building a back-end server. Most business or e-commerce websites use back-end servers to manage their influx of orders from their end-users. Using recently learned techniques such as MYSQL database, Express.js, and API will be present in this project.

## Github Link 

https://github.com/Leelai064/E-Commerce-Back-End

## Installation

*To fully access this code one must first clone the repository to their local machine.
1. Once the repository has been cloned into the local machine, in VS code Terminal the correct root directory pathway must be called.
2. Install the dependencies by typing (in the terminal): "npm install" or "npm i"
3. Start the data base by typing in the (in the terminal): "mysql -u root -p"
4. Once the password and other credentials are typed in and the data base is fully live create your tables by typing (in the terminal): "source db/schema.sql"
5. After steps 2-4 are complete exit the mysql terminal. Now we want to seed our data into our table.
6. To seed the data type (in the terminal): "npm run seed"
7. Once step 6 is complete start the server by typing (in the terminal): "npm start"
8. Fin.

## Walkthrough 

![Video](./assets/demo.gif)

## Features
* Javascript
* MySQL
* Express.js
* API
* Package.json
* Schema

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database


