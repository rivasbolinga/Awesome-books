'use script'

const titleInput = document.querySelector('.title-book-add');
const authorInput = document.querySelector(".author-book-add");
const btnAdd = document.querySelector(".btn-add");
const btnRemove = document.querySelector(".btn-remove");
const bookDisplay = document.querySelector(".books-display");

function Book(title, author) {
  this.title = title;
  this.author = author;
}
function UI (){}

// ADD BOOKS
const addBook = function(e) {
  const title = titleInput.value;
  const author = authorInput.value;
  const book = new Book(title,author);
  const ui = new UI();
  console.log(book, ui);
  ui.addBook(book);
  ui.clear();
  e.preventDefault();
}
btnAdd.addEventListener('click', addBook);

UI.prototype.addBook = function(book) {
  const bookDetail = document.createElement('div');
  bookDetail.innerHTML =
  `<p class="book-position">${book.title}</p>
  <p class="book-title">${book.author}</p>
  <button class="btn-remove">Remove</button>
  <div class="line-bottom"></div>`
  bookDisplay.appendChild(bookDetail);
}

// DELETE BOOKS
const deleteBook = function(e) {
  const ui = new UI();
  console.log(e.target);
  ui.deleteBook(e.target);
  e.preventDefault();
}
bookDisplay.addEventListener('click', deleteBook);

UI.prototype.deleteBook = function(target) {
  if(target.className === 'btn-remove') {
    target.parentElement.remove();
  }
}

// CLEAR FORM FIELDS
UI.prototype.clear = function() {
  titleInput.value = '';
  authorInput.value = '';
}