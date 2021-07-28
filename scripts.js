const theHobbit = new Books('The Hobbit', 'J.R.R. Tolkien', '295 pages', false)
const mazeRunner = new Books('Maze Runner', 'James Dashner', '375 pages', true)
const hungerGames = new Books('The Hunger Games', 'Suzanne Collins', '374 pages', false)

const btn = document.querySelector('.new-book')
btn.addEventListener('click', () => {
    let checkForm = document.querySelector('form')
    if (checkForm === null) {
        newBook()
    }
})

// let myLibrary = [theHobbit, mazeRunner, hungerGames]
let myLibrary = []
const books = document.getElementById('table')
display(myLibrary)


// display(myLibrary)
function display (myLibrary) {
    for (let i = 0; i < myLibrary.length; i++) {
        createTableRow(i);
        const row = document.querySelectorAll('.row')
        for (let key in myLibrary[i]) {
            let cell = document.createElement('div');
            cell.classList.add('cell')
            cell.id = key
            cell.textContent = myLibrary[i][key]
            row[i].appendChild(cell)
        }
    }
}

function addBook (myLibrary) {
    if (myLibrary.length === 0) {
        for (let i = 0; i < 1; i++) {
            createTableRow(i)
            const row = document.querySelectorAll('.row')
            for (let key in myLibrary[i]) {
                let cell = document.createElement('div');
                cell.classList.add('cell')
                cell.id = key
                cell.textContent = myLibrary[i][key]
                row[i].appendChild(cell)
                }
            }
} else {
    for (let i = myLibrary.length - 1; i < myLibrary.length; i++) {
        createTableRow(i)
        const row = document.querySelectorAll('.row')
        for (let key in myLibrary[i]) {
            let cell = document.createElement('div');
            cell.classList.add('cell')
            cell.id = key
            cell.textContent = myLibrary[i][key]
            row[i].appendChild(cell)  
            }    
        }
    }    
}

function createTableRow(i) {
    let row = document.createElement('div')
    row.classList.add('row')
    row.id = myLibrary[i]['title']
    books.appendChild(row)
    createReadButton(row);
    createDelButton(row);
}

function createDelButton(row) {
    let delButton = document.createElement('button')
    delButton.value = "Delete"
    delButton.textContent = "Delete"
    delButton.addEventListener('click', function() {
        this.parentElement.remove()
        let param = this.parentElement.id
        for (let i = 0; i < myLibrary.length; i++) {
            let index = myLibrary[i]['title']
            if (param === index) {
                myLibrary.splice(i, 1)
            }
        }
    })
    row.appendChild(delButton)
}



function createReadButton(row) {
    let readButton = document.createElement('button')
    readButton.value = "Read"
    readButton.textContent = "Read"
    readButton.addEventListener('click', function() {
        let param = this.parentElement.id
        for (let i = 0; i < myLibrary.length; i++) {
            let index = myLibrary[i]['title']
            if (param === index) {
                updateRead(i, index)
            }
        }
    })
    row.appendChild(readButton)
}


function newBook() {
    const form = document.createElement('form')
    const formDiv = document.getElementById('form')
    const title = document.createElement('input')
    title.required = true
    title.setAttribute('type', 'text');
    title.setAttribute('name', 'Title')
    title.setAttribute('placeholder', 'Title')
    const author = document.createElement('input')
    author.required = true
    author.setAttribute('type', 'text');
    author.setAttribute('name', 'Author')
    author.setAttribute('placeholder', 'Author')
    const pages = document.createElement('input')
    pages.required = true
    pages.setAttribute('type', 'number');
    pages.setAttribute('name', 'Pages')
    pages.setAttribute('placeholder', 'Number of Pages')
    const label = document.createElement('label')
    label.textContent = "Have you read it?"
    const read = document.createElement('input')
    read.setAttribute('type', 'checkbox');
    read.setAttribute('name', 'Read')
    read.setAttribute('value', 'true')
    const submit = document.createElement('input')
    submit.setAttribute('type', 'submit')
    submit.setAttribute('value', 'submit')
    form.appendChild(title)
    form.appendChild(author)
    form.appendChild(pages)
    form.appendChild(label)
    form.appendChild(read)
    form.appendChild(submit)
    form.addEventListener('submit', function(event) {
        let j = myLibrary.length + 1
        for (let i = myLibrary.length; i < j; i++) {
            myLibrary[i] = new Books(title.value, author.value, pages.value, read.checked)
            addBook(myLibrary)
            event.preventDefault();
            formDiv.removeChild(form)
        }
    })
    formDiv.appendChild(form)
}


function Books(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    if (read === true) {
        this.read = "Finished"
    } else {
        this.read = "Haven't read yet"
    }
}

function updateRead(i, index) {
    if (myLibrary[i]['read'] === "Finished") {
        myLibrary[i]['read'] = "Haven't read yet"
    } else {
        myLibrary[i]['read'] = "Finished"
    }
    const row = document.getElementById(index)
    row.lastChild.textContent = (myLibrary[i]['read'])
}


//Add new book button that brings up a form
//let form = prompt(author, title, number of pages, read)
//add it to array of objects

//Add a button that toggles read status
//this.read = true/false

//make Array titles match index so the splice function works
