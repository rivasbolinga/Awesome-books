'use script'


const titleInput = document.querySelector('.title-book-add');
const authorInput = document.querySelector(".author-book-add");
const btnAdd = document.querySelector(".btn-add");
const bookDisplay = document.querySelector(".books-display");
  
function Book(title, author) {
  this.title = title;
  this.author = author
}
function UI (){}


//Add books
const addBook = function(e) {
  const title = titleInput.value;
  const author = authorInput.value;
  const book = new Book(title,author);
  const ui = new UI();
  console.log(book, ui);
  ui.addBooks(book);
  e.preventDefault();
}
btnAdd.addEventListener('click', addBook);

//Display books

UI.prototype.addBooks = function(book) {
  const bookDetail = document.createElement('div');
  bookDetail.innerHTML = 
  `<p class="book-position">${book.title}</p>
  <p class="book-title">${book.author}</p>
  <button class="remove-btn">Remove</button>
  <div class="line-bottom"></div>`
  bookDisplay.appendChild(bookDetail);
}