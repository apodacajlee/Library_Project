console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

const books = [
    {
        id: 1,
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        read: true,
    },
];

class Book {
    constructor(id, title, author, read){
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class Library {
    constructor(books) {
        this.bookCount = books.length;
        this.books = books;
        this.nextId = 1;
    }

    addBook() {
        // get inputs from the form
        const title = document.getElementById("title");
        const author = document.getElementById("author");
        const read = document.getElementById("read");

        // Increment library book count by one
        this.nextId++;

        const newBook = new Book(this.nextId, title, author, read);
        this.books.push(newBook); // add book to the books array

        // Create a new table row
        const newTableRow = document.createElement("tr");

        // Create new table cells for the 3 properties
        const titleCell = document.createElement("td");
        titleCell.textContent = title.value;
        newTableRow.appendChild(titleCell);
        
        const authorCell = document.createElement("td");
        authorCell.textContent = author.value;
        newTableRow.appendChild(authorCell);

        const readCell = document.createElement("td");
        const newCheckbox = document.createElement("input");
        newCheckbox.id = newBook.id;
        newCheckbox.type = "checkbox";
        newCheckbox.checked = read.checked;
        newCheckbox.disabled = read.checked;
        newCheckbox.addEventListener("click", (event) => {
            this.markRead(event.target, parseInt(event.target.id));
        });

        readCell.appendChild(newCheckbox);
        newTableRow.appendChild(readCell);

        // Select the table body
        const tbody = document.getElementById("tableBody");

        // Append the new row to the table body
        tbody.appendChild(newTableRow);

    }

    markRead(checkbox, id){
        this.books.forEach((book) => {
            if(id === book.id) {
                book.read = true;
                checkbox.disabled = true;
            }
        });

    }

}

const library = new Library(books);

const form = document.getElementById("form");

// Select the `Add Book` button & add an event listener
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (event) => {
    event.preventDefault(); // prevents page from refreshing
    library.addBook();
    console.log(library.books);
});

