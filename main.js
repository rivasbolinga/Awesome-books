'use script'


  
  const book = [
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


book.forEach((e,i) => {
  const bookDetail = `
    <div class="book-box">
      <p class="book-position">${book[i].title}</p>
      <p class="book-title">${book[i].author}</p>
      <button class="remove-btn">Remove</button>
      <div class="line-bottom"></div>
    </div>
  `;
  bookDisplay.insertAdjacentHTML('beforeend', bookDetail);
});


//Add books
const addBook = function() {
  const newTitle = titleInput.value;
  const newAuthor = authorInput.value;
  console.log(newAuthor,newTitle);
  const Book2 = Object.assign({},book);
  //bookDisplay.innerHTML = JSON.stringify(book);
  Book2.title = titleInput.value;
  Book2.author= authorInput.value;
  
}
btnAdd.addEventListener('click', addBook);
