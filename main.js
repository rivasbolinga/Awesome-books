'use script'

const bookList = [
  {
    title: "Fine balance",
    author: "Federico Rivera",
  },
  {
    title: "The mistery of the murderer",
    author: "Sancho Perez",
  },
];
const titleInput = document.querySelector('.title-book-add');
const authorInput = document.querySelector(".author-book-add");
const btnAdd = document.querySelector(".btn-add");
const bookDisplay = document.querySelector(".books-display");
// Function to add a book

showBook.forEach((i) => {
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

btnAdd.addEventListener('click', addBook);