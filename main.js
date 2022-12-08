"use script";

// "max-classes-per-file": "off"

// DECLARE VARIABLES
const titleInput = document.querySelector(".title-book-add");
const authorInput = document.querySelector(".author-book-add");
const btnAdd = document.querySelector(".btn-add");
const bookDisplay = document.querySelector(".books-display");
const bookDetail = document.querySelector(".books-detail");
const form = document.querySelector(".add-book-form");
const newId = 0;

// DECLARE CLASSES
class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

class LocalStore {
  static getBooks() {
    let books;
    const localBook = localStorage.getItem("local");
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
      localStorage.setItem("local", JSON.stringify(books));
    }
  }

  static deleteBooks(id) {
    let books = LocalStore.getBooks();
    // const number = parseInt(id, 10);
    books = books.filter((newBook) => JSON.stringify(newBook.id) !== id);
    localStorage.setItem("local", JSON.stringify(books));
  }
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
      <div>
        <p class="book-position">"<span class="">${newBook.title}</span>" by <span class="">${newBook.author}</span></p>
        <button id="${newId}" class="btn-remove">Remove</button>
      </div>
    `;
    bookDetail.innerHTML += bookInfo;
    // newId += 1;
  }

  static deleteBookFromList(newid) {
    const item = document.getElementById(`${newId}`);
    // item.parentElement.removeChild(item);
    item.parentElement.remove();
  }
}

// LOCAL STORAGE

// CREATE BOOK SECTION

// ADD BOOKS

// REMOVE BOOKS

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  const newBook = new Book(title, author);
  LocalStore.addBooks(newBook);
  UI.addBookToList(newBook);
  form.reset();
});

bookDisplay.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.className === "btn-remove") {
    LocalStore.deleteBooks(e.target.parentElement.id);
    UI.deleteBookFromList(e.target.parentElement.id);
  }
});

const bookList = LocalStore.getBooks();
bookList.forEach((book) => {
  UI.addBookToList(book);
});

// UI.addBookToList()
