# React Books

![License](https://img.shields.io/badge/license-MIT-181717?style=for-the-badge) 

## Table of Contents
||||
|:-:|:-:|:-:|
|[Table Contents](#table-of-contents)|[Deployed Link](#deployed-link)|[Technologies Used](#technologies-used)
|[Description](#description)|[Work Involved](#work-involved)|[Code Snippet](#code-snippet)
|[License](#license)|[Authors](#authors)|[Acknowledgments](#acknowledgments)

---

## Deployed Link
[Deployed Link](https://books-reactor-01.herokuapp.com/)

## Site Gif
![Site](./demo.gif)

## Technologies Used
|||||
|:-:|:-:|:-:|:-:|
|React|Mongoose|MongoDB|Google Books API|HTML
|CSS|Javascript|Bulma|Robo3T
|Github|Heroku|Node|Express

## Description
This is a full stack React based application that allows users to search for Google Books, add them to their Saved page, and delete them from their page as well. 

## Work Involved
For this application, we utilized React and Bulma in order to design the front end aspects of the site. For the backend, we utilized MongoDB and Mongoose in order to allow a user to save and delete books from the database. 

## Code Snippet
This function utilizes the Google Books API in order to render the list of books. 
```javascript
  searchBookName: function (bookName) {
    return new Promise((resolve, reject) => {
      console.log("https://www.googleapis.com/books/v1/volumes?q=" + bookName);
      axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookName)
        .then((res) => {
          console.log(res.data.items);
          resolve(res.data.items.slice(0, 3));
        }).catch((err) => reject(err));
    })
  }
};
```

## License
This project is covered under MIT.

## Authors

**Jessny Joseph** 

[Github](https://github.com/jessnyj) | [LinkedIn](https://www.linkedin.com/in/jessny-joseph-361515201)

**Muhammad Khalid**

[Github](https://github.com/akhalid88) | [LinkedIn](https://www.linkedin.com/in/abdullahkhalid/)

**Coleman Buffa** 

[Github](https://github.com/coleman-buffa) | [LinkedIn](https://www.linkedin.com/in/coleman-buffa/)

## Acknowledgments
Many things to the mentors and friends who are a continuous source of project inspiration and learning opportunities. 
