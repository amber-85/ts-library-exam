"use strict";
const bookGroup = document.querySelector(".book__group");


const bookData = () => fetch("https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books", { method: "GET" })
    .then(res => res.json())
    .then((data) => {
    return data;
});
bookData().then(books => {
    books.forEach(book => {
        const bookEl = document.createElement("article");
        bookEl.classList.add("book__cover");

        const bookLine = document.createElement("aside");
        bookLine.classList.add("book__line");

        const bookTitleFrame = document.createElement("section");
        bookTitleFrame.classList.add("title__frame");

        const bookTitle = document.createElement("h2");
        bookTitle.classList.add("cover__title");
        bookTitle.textContent = book.title;

        const bookAuthor = document.createElement("h3");
        bookAuthor.classList.add("cover__author");
        bookAuthor.textContent = book.author;

        const bookColor = book.color;
        const upperColor = "white";
        bookEl.style.background = `linear-gradient(45deg,${bookColor} 75%, ${upperColor} 100%)`;

        bookTitleFrame.appendChild(bookTitle);
        bookTitleFrame.appendChild(bookAuthor);
        bookEl.appendChild(bookTitleFrame);
        bookEl.appendChild(bookLine);
        bookGroup === null || bookGroup === void 0 ? void 0 : bookGroup.appendChild(bookEl);
    });
});
