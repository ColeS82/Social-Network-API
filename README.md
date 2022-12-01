# Social Network API
MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Over the last part of this course, you’ll use several of the technologies that social networking platforms use in their full-stack applications. Because the foundation of these applications is data, it’s important that you understand how to build and structure the API first.

## Description

This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Users can interact with each other by creating post and adding friends. Those friends can then display reactions to the user's post.

## User Story

```md
AS new developer
I WANT to make an API for a social network that uses a NoSQL database
SO THAT a website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation

Download the package from the link below. enter 
```
npm i
```
```
npm start
``` 

## Usage

This program is to be used with a program like insomniac.  Enter the address of localhost:3001 and test the get, post and delete routes

![alt text](./Assets/images/Untitled_%20Nov%2030%2C%202022%2011_47%20PM.gif)

## Credits

N/A

## License

open

## Links

Github repo:
https://github.com/ColeS82/Social-Network-API