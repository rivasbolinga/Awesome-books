'use script'

// CREATE
let book = [
  {
    id: 0,
    title: 'QWERTY',
    author: 'Henschel',
  },
  {
    id: 1,
    title: 'AZERTY',
    author: 'Milton',
  },
];

const titleInput = document.querySelector('.title-book-add');
const authorInput = document.querySelector(".author-book-add");
const btnAdd = document.querySelector(".btn-add");
const btnRemove = document.querySelector(".btn-remove");
const bookDisplay = document.querySelector(".books-display");

// LOCAL STORAGE
const bookValue = JSON.parse(localStorage.getItem('book'));
if(bookValue === 0 || bookValue === null){
  localStorage.setItem('local', JSON.stringify(book));
} else{
  book = bookValue;
}

// CREATE BOOK SECTION
for(let i = 0; i < book.length; i++){
  const bookInfo = `
    <div>
      <p class="book-position">${book[i].title}</p>
      <p class="book-title">${book[i].author}</p>
      <button id="${book[i].id}" class="btn-remove">Remove</button>
      <div class="line-bottom"></div>
    </div>
  `;
  bookDisplay.innerHTML += bookInfo;
}

// ADD BOOKS
btnAdd.addEventListener('click', (e) => {
  e.preventDefault();
  const newTitle = titleInput.value;
  const newAuthor = authorInput.value;
  let newId;
  let len = book.length;
  if (len === 0 || len === null) {
    newId = 0;
  } else {
    newId = book[len - 1].id + 1;
  }
  const newBook = {
    id: newId,
    title: newTitle,
    author: newAuthor,
  }
  book.push(newBook);
  const bookInfo = `
    <div>
      <p class="book-position">${newBook.title}</p>
      <p class="book-title">${newBook.author}</p>
      <button id="${newBook.id}" class="btn-remove">Remove</button>
      <div class="line-bottom"></div>
    </div>
  `;
  bookDisplay.innerHTML += bookInfo;
  localStorage.setItem('local', JSON.stringify(book)); // LOCAL STORAGE
});

// REMOVE BOOKS
bookDisplay.addEventListener('click', (e) => {
  if(e.target.className === 'btn-remove'){
    const {id} = e.target;
    book = book.filter((bk) => JSON.stringify(bk.id) !== id);
    localStorage.setItem('local', JSON.stringify(book)); // LOCAL STORAGE
    e.target.parentElement.remove();
  }
});