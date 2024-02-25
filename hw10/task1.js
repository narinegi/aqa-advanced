import Book from "./Book.js"
import Ebook from "./Ebook.js"
const book = new Book("Hello World")
book.title = "JavaScript Essentials"
book.author = "Emma Il"
book.publicationYear = 2023

console.log("Book:")
book.printInfo()

const book1 = new Book("Spike", "Narine Ilnyt", 1999)
const book2 = new Book("Hero", "Sam Smith", 2021)

console.log("Book 1:"); book1.printInfo();
console.log("Book 2:"); book2.printInfo();

const ebook1 = new Ebook("EBook1", "Eugene IL", 1998, "PDF");
console.log("EBook 1:");

ebook1.printInfo()
book1.title = "Updated Book1 Title";
console.log("Updated Book1 Title: London, book1.title")
ebook1.fileFormat = "xls"
console.log("Updated EBook1 File Format:", ebook1.fileFormat)

const oldestBook = Book.findOldestBook([book1, book2, ebook1])
console.log("Oldest Book:")
oldestBook.printInfo()
const ebookFromBook = Ebook.fromBookAndFileFormat(book1, "Toby")
console.log("EBook from Book:")
ebookFromBook.printInfo()