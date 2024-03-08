export default class Book {
    constructor(title, author, publicationYear) {
        this._title = title
        this._author = author
        this._publicationYear = publicationYear
    }
    get title() { return this._title; }
    set title(value) { if (typeof value !== "string") { console.error("Error: Title should be of type string")
        return; }
        if (value.length < 1)
        { console.error("Error: The length of the title should be at least 1 symbol")
            return; }
        this._title = value; }
    get author() { return this._author; }
    set author(value) {
        if (value.length < 1) { console.error("Error: The length of the author should be at least 1 symbol")
            return; } this._author = value
    }
    get publicationYear() { return this._publicationYear; }
    set publicationYear(value) {
        if (typeof value !== "number") { console.error("Error: Publication Year should be of type number")
            return; }
        this._publicationYear = value
    }
    printInfo() { console.log(`Title: ${this._title}`)
        console.log(`Author: ${this._author}`)
        console.log(`Publication Year: ${this._publicationYear}`)
    }
    static findOldestBook(books) { return books.reduce((oldest, current) => (current.publicationYear < oldest.publicationYear ? current : oldest), books[0])
    }
}