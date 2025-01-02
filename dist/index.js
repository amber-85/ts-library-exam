"use strict";
// create interface Book for further use in function
// create all elements will be used in function. use as htmlelements to make them into htmlelements
const bookGroup = document.querySelector(".book__group");
const popupBookDetails = document.querySelector(".popup__book__details");
const popupBookFrame = document.querySelector(".book__frame");
const popupBookTitle = document.querySelector(".book__title");
const popupBookAuthor = document.querySelector(".book__author");
const detailBookName = document.querySelector(".detail__name");
const detailBookAuthor = document.querySelector(".detail__author");
const detailBookAbstract = document.querySelector(".abstract");
const detailBookAudience = document.querySelector(".audience");
const detailBookPublishInfo = document.querySelector(".first__published");
const detailBookPageNumber = document.querySelector(".pages");
const detialBookPublisher = document.querySelector(".publisher");
const returnBtn = document.querySelector(".return__button");
// fetch data through API
const bookData = () => fetch("https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books", { method: "GET" })
    .then(res => res.json())
    .then((data) => {
    return data;
});
// using article index cannot get the right elements because the article elements 
// have not been yet created with typescript. I need to use query selectAll to generate
// an array to loop through all elements.
// create getBookInfo function using Book as parameter to return all information of one specific book
const getBookInfo = (book) => {
    const backgroundColor = book.color;
    const upperColor = "white";
    popupBookFrame.style.background = `linear-gradient(45deg,${backgroundColor} 75%, ${upperColor} 100%)`;
    popupBookTitle.textContent = book.title;
    popupBookAuthor.textContent = book.author;
    detailBookName.textContent = book.title;
    detailBookAuthor.textContent = "By" + " " + book.author;
    detailBookAbstract.textContent = book.plot;
    detailBookAudience.textContent = "Audience:" + "" + book.audience;
    const bookYear = book.year;
    detailBookPublishInfo.textContent = "First Published:" + String(bookYear);
    const bookPages = book.pages;
    detailBookPageNumber.textContent = "Pages:" + String(bookPages);
    detialBookPublisher.textContent = "Publisher" + book.publisher;
};
// use then and forEach to loop data fetched from API and create HTML elements on main page of each book
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
        bookEl.addEventListener("click", () => {
            getBookInfo(book);
            popupBookDetails.style.display = "block";
        });
    });
});
// reset popup detail page when click return button
const reset = () => {
    popupBookTitle.textContent = "";
    popupBookAuthor.textContent = "";
    detailBookName.textContent = "";
    detailBookAuthor.textContent = "By" + " ";
    detailBookAbstract.textContent = "";
    detailBookAudience.textContent = "Audience:";
    detailBookPublishInfo.textContent = "First Published:";
    detailBookPageNumber.textContent = "Pages:";
    detialBookPublisher.textContent = "Publisher:";
};
returnBtn.addEventListener("click", () => {
    popupBookDetails.style.display = "none";
    reset();
});
// search function doesn't work, I cannot find why. will need more check
// const inputResult=document.querySelector(".input__frame") as HTMLInputElement;
// const userSearchBtn=document.querySelector(".input__button") as HTMLButtonElement;
// const searchBook=()=>{
//     if (inputResult){
//         const searchResult:string=inputResult.value;
//         bookData().then(books=>{
//             const book=books.find(book=>
//                 book.title.toLowerCase()==searchResult.toLowerCase());
//                 if(book){
//                         getBookInfo(book);
//                         popupBookDetails.style.display="block";
//                     }
//                 else{
//                     console.log("No matching book foun.");   
//                 };
//         });
//     }
// }
// userSearchBtn.addEventListener("click",searchBook);
