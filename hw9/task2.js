const book = {
    title: "JS Basics: I hope i can handle it",
    author: "Narine Il",
    year: 1954

}
const { title: newTitle, author: newAuthor} = book
book.newAuthor = "John Smith"
book.newTitle = "There is always hope"


console.log("Title:",book.newTitle,"Author:",book.newAuthor)
