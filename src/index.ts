
// import { bookData} from './module'
 interface Book{
    id:number;
    title:string;
    author:string;
    publisher:string;
    year:number;
    pages:number;
    plot:string;
    audience:string;
    color:string;
}

 const bookData=():Promise<Book[]>=>
    fetch("https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books", {method:"GET"})
    .then(res=>res.json())
    .then((data:Book[])=>{
        return data
    })

const bookGroup=document.querySelector(".book__group") as HTMLElement;

const popupBookDetails=document.querySelector(".popup__book__details") as HTMLElement;
const popupBookFrame=document.querySelector(".book-frame") as HTMLElement;
const popupBookTitle=document.querySelector(".book__title") as HTMLElement;
const popupBookAuthor=document.querySelector(".book__author") as HTMLElement;
const detailBookName=document.querySelector(".detail__name") as HTMLElement;
const detailBookAuthor=document.querySelector(".detail__author") as HTMLElement;
const detailBookAbstract=document.querySelector(".abstract") as HTMLElement;
const detailBookAudience=document.querySelector(".audience") as HTMLElement;
const detailBookPublishInfo=document.querySelector(".first__published") as HTMLElement;
const detailBookPageNumber=document.querySelector(".pages") as HTMLElement;
const detialBookPublisher=document.querySelector(".publisher") as HTMLElement;



// using article index cannot get the right elements because the article elements 
// have not been yet created with typescript. I need to use query selectAll to generate
// an array to loop through all elements.

const bookOne=document.getElementsByTagName("article")[0] as HTMLElement;
const bookTwo=document.getElementsByTagName("article")[1] as HTMLElement;
const bookThree=document.getElementsByTagName("article")[2] as HTMLElement;
const bookFour=document.getElementsByTagName("article")[3] as HTMLElement;
const bookFive=document.getElementsByTagName("article")[4] as HTMLElement;
const bookSix=document.getElementsByTagName("article")[5] as HTMLElement;
const bookSeven=document.getElementsByTagName("article")[6] as HTMLElement;
const bookEight=document.getElementsByTagName("article")[7] as HTMLElement;

const returnBtn=document.querySelector(".return__button") as HTMLElement;




   bookData().then(books=>{
    books.forEach(book=>{
        const bookEl=document.createElement("article");
        bookEl.classList.add("book__cover");
        const bookLine=document.createElement("aside");
        bookLine.classList.add("book__line");
        const bookTitleFrame=document.createElement("section");
        bookTitleFrame.classList.add("title__frame");
        const bookTitle=document.createElement("h2");
        bookTitle.classList.add("cover__title");
        bookTitle.textContent=book.title;
        const bookAuthor=document.createElement("h3");
        bookAuthor.classList.add("cover__author");
        bookAuthor.textContent=book.author;
        const bookColor=book.color;
        const upperColor="white";
        bookEl.style.background=`linear-gradient(45deg,${bookColor} 75%, ${upperColor} 100%)`
        bookTitleFrame.appendChild(bookTitle);
        bookTitleFrame.appendChild(bookAuthor);
        bookEl.appendChild(bookTitleFrame);
        bookEl.appendChild(bookLine);
        bookGroup?.appendChild(bookEl)

        bookEl.addEventListener("click", () => {
            getBookInfo(book);
        });
    });
});




const getBookInfo=(book:Book)=> {
    const backgroundColor=book.color
    const upperColor="white";
    popupBookFrame.style.background=`linear-gradient(45deg,${backgroundColor} 75%, ${upperColor} 100%)`
    popupBookTitle.textContent=book.title;
    popupBookAuthor.textContent=book.author;
    detailBookName.textContent=book.title;
    detailBookAuthor.textContent=book.author;
    detailBookAbstract.textContent=book.plot;
    detailBookAudience.textContent=book.audience;

    const bookYear=book.year;
    detailBookPublishInfo.textContent=String(bookYear);

    const bookPages=book.pages;
    detailBookPageNumber.textContent=String(bookPages);

    detialBookPublisher.textContent=book.publisher;  
}




const reset=()=>{
    popupBookTitle.innerHTML="";
    popupBookAuthor.innerHTML="";
    detailBookName.innerHTML="";
    detailBookAuthor.innerHTML="";
    detailBookAbstract.innerHTML="";
    detailBookAudience.innerHTML="";
    detailBookPublishInfo.innerHTML="";
    detailBookPageNumber.innerHTML="";
    detialBookPublisher.innerHTML=""; 
}

returnBtn.addEventListener("click",()=>{
    popupBookDetails.style.display="none";
    reset();
})





// bookOne.addEventListener("click",()=>{
//     getBookInfo(0);
//     popupBookDetails.style.display="block";
// })

// bookTwo.addEventListener("click",()=>{
//     getBookInfo(1);
//     popupBookDetails.style.display="block";
// })

// bookThree.addEventListener("click",()=>{
//     getBookInfo(2);
//     popupBookDetails.style.display="block";
// })

// bookFour.addEventListener("click",()=>{
//     getBookInfo(3);
//     popupBookDetails.style.display="block";
// })

// bookFive.addEventListener("click",()=>{
//     getBookInfo(4);
//     popupBookDetails.style.display="block";
// })

// bookSix.addEventListener("click",()=>{
//     getBookInfo(5);
//     popupBookDetails.style.display="block";
// })

// bookSeven.addEventListener("click",()=>{
//     getBookInfo(6);
//     popupBookDetails.style.display="block";
// })

// bookEight.addEventListener("click",()=>{
//     getBookInfo(7);
//     popupBookDetails.style.display="block";
// })