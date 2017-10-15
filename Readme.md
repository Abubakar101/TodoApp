# Project Overview

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## Installation

Use this section to include all steps needed to download your project including installing dependencies and seeding your a database.

## Priority Matrix

Include an image of the matirx as well as a full bulleted list of features that have been prioritized based on the `Time and Importance` Matix.  

## MVP 

Include the full list of features that will be part of your MVP 

## Post-MVP

Include the full list of features that you are considering for Post-MVP

## Wireframes

Include images of the following wireframes:

- Landing Page
- All supporting pages
- The below routes\controllers\models\views table

## User Stories

Include user stories regarding how users will interact with the app such as when the page loads how will the user migrate through the page.  

## Project Management

Use Github's `Project Managment Tab`  to list all the task that need to be completed.  At a minimum the tasks should be categroized into one of the four columns:  ToDo, InProgress, Complete, Issue

## Routes..Controllers..Models..Views..Oh My...

Use this section to document the routes and supporting functionality of the app. 

| Route | Controller | Model | Does | Result | View | Exits |
| --- | :---: |  :---: | :---: | :---: | :---: | :---: |
| /quotes | GET | Index | findAll | Selects *  | [{quotes}] | ShowQuotes | redirect(/quotes) 

## Functional Components

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Based on the prioritized feature list completed in the `Priority Matix` and assign time estimates.  

| Feature | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Planning | H | 1 day | 8 hrs |  |
| Rails - Backend | H | 2 days | 3.5 days |  |
| React - Frontend| H | 2 days | 2 days |  |
| CSS | H | 2 day | 2.7 days |  |
## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: `PG::UndefinedTable: ERROR:  relation "categories" does not exist`                               
**RESOLUTION**: Deleted the `foreign_key: true` from `t.references` values

**ERROR**: `PG::UndefinedColumn: ERROR:  column "user" does not exist`                               
**RESOLUTION**: Deleted the `add_index` to user

**ERROR**: `undefined method update for nil:NilClass`                              
**RESOLUTION**: Added parent ID inside the `set_todolist` i.e., `@user = User.find(params[:user_id])`

**ERROR**: `Not able to pass the name of category in params correctly`                              
**RESOLUTION**: 
**ERROR**: `Not able to show only current user data`                              
**RESOLUTION**: `@todolists = Todolist.where(user_id: current_user.id)`

