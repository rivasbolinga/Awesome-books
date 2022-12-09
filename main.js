// 'use script';

// "max-classes-per-file": "off"

// DECLARE VARIABLES
const titleInput = document.querySelector('.title-book-add');
const authorInput = document.querySelector('.author-book-add');
const btnAdd = document.querySelector('.btn-add');
const bookDisplay = document.querySelector('.books-display');
const bookDetail = document.querySelector('.books-detail');
const form = document.querySelector('.add-book-form');
const errorMsg = document.querySelector('.error-message');
let newId = 0;

// DECLARE MAIN CLASS
class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

// LOCAL STORAGE

class LocalStore {
  static getBooks() {
    let books;
    const localBook = localStorage.getItem('local');
    if (!localBook) {
      books = [];
    } else {
      books = JSON.parse(localBook);
    }
    return books;
  }

  static addBooks(newBook) {
    const books = LocalStore.getBooks();
    if (books) {
      books.push(newBook);
      localStorage.setItem('local', JSON.stringify(books));
    }
  }

  // static deleteBooks()
}

class UI {
  static showBooks() {
    const books = LocalStore.getBooks();
    books.forEach((newBook) => {
      UI.addBookToList(newBook);
    });
  }

  static addBookToList(newBook) {
    newBook.id = newId;
    const bookInfo = `
      <div id="${newId}">
        <p class="book-position">"<span class="">${newBook.title}</span>" by <span class="">${newBook.author}</span></p>
        <button id="${newId}" class="btn-remove">Remove</button>
      </div>
    `;
    bookDetail.innerHTML += bookInfo;
    newId += 1;
  }

  static deleteBookFromList(e) {
    e.parentElement.remove();
  }
}

// ADD BOOKS

btnAdd.addEventListener('click', (e) => {
  e.preventDefault();
  const books = LocalStore.getBooks();
  const newTitle = titleInput.value;
  const newAuthor = authorInput.value;
  let newId;
  const len = books.length;
  if (len === 0 || len === null) {
    newId = 0;
  } else {
    newId = books[len - 1].id + 1;
  }
  const newBook = new Book(newTitle, newAuthor, newId);
  if (newTitle.length !== 0 && newAuthor.length !== 0) {
    LocalStore.addBooks(newBook);
    UI.addBookToList(newBook);
    errorMsg.style.display = 'none';
  } else {
    errorMsg.style.display = 'block';
  }
  form.reset();
});

// REMOVE BOOKS

bookDisplay.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.className === 'btn-remove') {
    const { id } = e.target;
    let books = LocalStore.getBooks();
    books = books.filter((bk) => JSON.stringify(bk.id) !== id);
    localStorage.setItem('local', JSON.stringify(books)); // LOCAL STORAGE
    UI.deleteBookFromList(e.target);
  }
});

document.addEventListener('DOMContentLoaded', UI.showBooks);
