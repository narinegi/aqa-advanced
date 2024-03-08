import Book from "./Book.js"
export default class Ebook extends Book { constructor(title, author, year, fileFormat)
{
    super(title, author, year)
    this._fileFormat = fileFormat
}
    get fileFormat() { return this._fileFormat; }
    set fileFormat(value) { if (typeof value !== "string" || value.toLowerCase() !== "pdf")
    { console.error("Error message: PDF is the required file type")
        return
    }
        this._fileFormat = value}
    printInfo()
    { super.printInfo()
        console.log(`File Format: ${this._fileFormat}`)
    }static fromBookAndFileFormat(book, fileFormat) { return new Ebook(book.title, book.author, book.publicationYear, fileFormat)
}
}