"use strict";
const bookData = () => fetch("https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books", { method: "GET" })
    .then(res => res.json())
    .then((data) => {
    return data;
});
const bookGroup = document.querySelector(".book__group");
const popupBookDetails = document.querySelector(".popup__book__details");
const popupBookFrame = document.querySelector(".book-frame");
const popupBookTitle = document.querySelector(".book__title");
const popupBookAuthor = document.querySelector(".book__author");
const detailBookName = document.querySelector(".detail__name");
const detailBookAuthor = document.querySelector(".detail__author");
const detailBookAbstract = document.querySelector(".abstract");
const detailBookAudience = document.querySelector(".audience");
const detailBookPublishInfo = document.querySelector(".first__published");
const detailBookPageNumber = document.querySelector(".pages");
const detialBookPublisher = document.querySelector(".publisher");
// const bookOne = document.getElementsByTagName("article")[0];
// const bookTwo = document.getElementsByTagName("article")[1];
// const bookThree = document.getElementsByTagName("article")[2];
// const bookFour = document.getElementsByTagName("article")[3];
// const bookFive = document.getElementsByTagName("article")[4];
// const bookSix = document.getElementsByTagName("article")[5];
// const bookSeven = document.getElementsByTagName("article")[6];
// const bookEight = document.getElementsByTagName("article")[7];
// const returnBtn = document.querySelector(".return__button");

console.log(bookTwo);

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
const getBookInfo = (index) => bookData().then(bookArr => {
    const backgroundColor = bookArr[index].color;
    const upperColor = "white";
    popupBookFrame.style.background = `linear-gradient(45deg,${backgroundColor} 75%, ${upperColor} 100%)`;
    popupBookTitle.textContent = bookArr[index].title;
    popupBookAuthor.textContent = bookArr[index].author;
    detailBookName.textContent = bookArr[index].title;
    detailBookAuthor.textContent = bookArr[index].author;
    detailBookAbstract.textContent = bookArr[index].plot;
    detailBookAudience.textContent = bookArr[index].audience;
    const bookYear = bookArr[index].year;
    detailBookPublishInfo.textContent = String(bookYear);
    const bookPages = bookArr[index].pages;
    detailBookPageNumber.textContent = String(bookPages);
    detialBookPublisher.textContent = bookArr[index].publisher;
});
const reset = () => {
    popupBookTitle.innerHTML = "";
    popupBookAuthor.innerHTML = "";
    detailBookName.innerHTML = "";
    detailBookAuthor.innerHTML = "";
    detailBookAbstract.innerHTML = "";
    detailBookAudience.innerHTML = "";
    detailBookPublishInfo.innerHTML = "";
    detailBookPageNumber.innerHTML = "";
    detialBookPublisher.innerHTML = "";
};
returnBtn.addEventListener("click", () => {
    popupBookDetails.style.display = "none";
    reset();
});
bookOne.addEventListener("click", () => {
    popupBookDetails.style.display = "block";
    getBookInfo(0);
    
});
bookTwo.addEventListener("click", () => {
    getBookInfo(1);
    popupBookDetails.style.display = "block";
});
bookThree.addEventListener("click", () => {
    getBookInfo(2);
    popupBookDetails.style.display = "block";
});
bookFour.addEventListener("click", () => {
    getBookInfo(3);
    popupBookDetails.style.display = "block";
});
bookFive.addEventListener("click", () => {
    getBookInfo(4);
    popupBookDetails.style.display = "block";
});
bookSix.addEventListener("click", () => {
    getBookInfo(5);
    popupBookDetails.style.display = "block";
});
bookSeven.addEventListener("click", () => {
    getBookInfo(6);
    popupBookDetails.style.display = "block";
});
bookEight.addEventListener("click", () => {
    getBookInfo(7);
    popupBookDetails.style.display = "block";
});
