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

// Display books

const displayBook = function() {
  let html= "";
  bookList.forEach((e,i) => {
  html  += `
    <div class="book-box">
      <p class="book-position">${bookList[i].title}</p>
      <p class="book-title">${bookList[i].author}</p>
      <button class="remove-btn">Remove</button>
      <div class="line-bottom"></div>
    </div>
  `;
});
bookDisplay.innerHTML = html;
}
// create book
const createBook = function (e) {
  e.preventDefault()
  const newBook = {};
  newBook.title = newTitle.value;
  newBook.author = newAuthor.value;
  bookList.push(newBook);
  console.log(bookList);
  displayBook();
  newTitle.value = newAuthor.value = "";
}
btnAdd.addEventListener("click",createBook);

// show books when you refresh
window.addEventListener('load', () => {
  displayBook();
});

//remove book

const deleteBook = function(target) {

}
bookDisplay.addEventListener('click', deleteBook);

document.querySelectorAll('btn-remove').forEach((btnRemove) => {
  btnRemove.addEventListener('click', remove(btnRemove));
});