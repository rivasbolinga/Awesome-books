'use script'

const newTitle = document.querySelector('#title-book-add');
const newAuthor = document.querySelector(".author-book-add");
const btnAdd = document.querySelector(".btn-add");
const btnRemove = document.querySelector(".btn-remove");
const bookDisplay = document.querySelector(".books-display");


const bookList = [ 
  { 
    title: "book 1", 
    author: "author 1" 
  },
 { 
  title: "book 2", 
  author: "author 2" } ];

// Create a Book:
const displayBook = function() {
  bookList.forEach((e,i) => {
  const bookDetail = `
    <div class="book-box">
      <p class="book-position">${bookList[i].title}</p>
      <p class="book-title">${bookList[i].author}</p>
      <button class="remove-btn">Remove</button>
      <div class="line-bottom"></div>
    </div>
  `;
  bookDisplay.insertAdjacentHTML('beforebegin', bookDetail);
});
}

const createBook = function (e) {
  e.preventDefault()
  const newBook = {};
  newBook.title = newTitle.value;
  newBook.author = newAuthor.value;
  bookList.push(newBook);
  console.log(bookList);
  displayBook();
}

btnAdd.addEventListener("click",createBook);

window.addEventListener('load', () => {
  displayBook();
});

