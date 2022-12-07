'use script';

// "max-classes-per-file": "off"

// DECLARE VARIABLES
const titleInput = document.querySelector('.title-book-add');
const authorInput = document.querySelector('.author-book-add');
const btnAdd = document.querySelector('.btn-add');
const bookDisplay = document.querySelector('.books-display');
const bookDetail = document.querySelector('.books-detail');

// DECLARE CLASSES
class Book {
  constructor(title, author, id) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

class UI {}

// LOCAL STORAGE
class LocalBook {
  static getBooks() {
    let book;
    const getBook = localStorage.getItem('book');
    if (getBook === null) {
      book = [];
    } else {
      book = JSON.parse(getBook);
    }
    return book;
  }

  static showBooks() {
    const book = LocalBook.getBooks();
    book.forEach((newBook) => {
      const ui = new UI();
      ui.addBook(newBook);
    });
  }

  static addBooks(newBook) {
    const book = LocalBook.getBooks();
    book.push(newBook);
    localStorage.setItem('local', JSON.stringify(book));
  }

  static deleteBooks(newId) {
    const book = LocalBook.getBooks();
    book.forEach((book, i) => {
      if (book.id === newId) {
        book.splice(i, 1);
      }
    });
    localStorage.setItem('local', JSON.stringify(book));
  }
}

// CREATE BOOK SECTION
// for (let i = 0; i < book.length; i += 1) {
//   const bookInfo = `
//     <div>
//       <p class="book-position">${book[i].title}</p>
//       <p class="book-title">${book[i].author}</p>
//       <button id="${book[i].id}" class="btn-remove">Remove</button>
//       <div class="line-bottom"></div>
//     </div>
//   `;
//   bookDisplay.innerHTML += bookInfo;
// }

// ADD BOOKS

// btnAdd.addEventListener('click', (e) => {
//   e.preventDefault();
//   const newTitle = titleInput.value;
//   const newAuthor = authorInput.value;
//   let newId;
//   const len = book.length;
//   if (len === 0 || len === null) {
//     newId = 0;
//   } else {
//     newId = book[len - 1].id + 1;
//   }
//   const newBook = {
//     id: newId,
//     title: newTitle,
//     author: newAuthor,
//   };
//   book.push(newBook);
//   const bookInfo = `
//     <div>
//       <p class="book-position">${newBook.title}</p>
//       <p class="book-title">${newBook.author}</p>
//       <button id="${newBook.id}" class="btn-remove">Remove</button>
//       <div class="line-bottom"></div>
//     </div>
//   `;
//   bookDisplay.innerHTML += bookInfo;
//   localStorage.setItem('local', JSON.stringify(book)); // LOCAL STORAGE
// });

// const newId = id
// const len = book.length;
// if (len === 0 || len === null) {
//   newId = 0;
// } else {
//   newId = book[len - 1].id + 1;
// }

btnAdd.addEventListener('click', (e) => {
  e.preventDefault();
  const newTitle = titleInput.value;
  const newAuthor = authorInput.value;
  const newBook = new Book(newTitle, newAuthor);
  const ui = new UI();
  ui.addBook(newBook);
  LocalBook.addBooks(newBook);
});

UI.prototype.addBook = (newBook) => { // id="${newBook.id}"
  const bookInfo = `
      <div>
        <p class="book-position">"<span class="">${newBook.title}</span>" by <span class="">${newBook.author}</span></p>
        <button id="" class="btn-remove">Remove</button>
      </div>
  `;
  bookDetail.innerHTML += bookInfo;
};

// REMOVE BOOKS
bookDisplay.addEventListener('click', (e) => {
  e.preventDefault();
  const ui = new UI();
  ui.deleteBook(e.target);
  // LocalBook.deleteBooks(e.target.parentElement.previousElementSibling.textContent);
});

UI.prototype.deleteBook = (target) => {
  if (target.className === 'btn-remove') {
    target.parentElement.remove();
  }
};