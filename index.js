/*Part 1: Understanding Objects

You are given the task of representing a book in a library system. 
Use an object to model the book with the following information:

- Title: "JavaScript: The Definitive Guide"
- Author: "David Flanagan"
- Published Year: 2020
- Genre: "Programming"

Task 1) Create an object named 'book' using curly braces {} that includes the information above.

Task 2) Access and return the book's title using dot notation and the published year using bracket notation.
******************************************************************/
const book = {
  tiltle: "JavaScript",
  author: "David Flanagan",
  PublishedYear: 2020,
  Genre: "programming",
};
console.log(book.tiltle);

/*****************************************************************
Part 2: Modifying Objects

Consider you need to update the book's information and add a new property:


Task 3) Add a property 'pageCount' with the value 1096 to the 'book' object.

Task 4) The book has been assigned an ISBN number. Add a property 'ISBN' with a value "978-1491952023".
        Then, modify the 'publishedYear' to 2021 as a new edition has been released.
******************************************************************/
book.gender = "male";
console.log(book.gender);

book.pageCount = 1096;
console.log(book.pageCount);

book.ISBN = 978 - 1491952023;
console.log(book.ISBN);

book.PublishedYear = 2021;
console.log(book.PublishedYear);
