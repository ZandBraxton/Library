const theHobbit = new Books('The Hobbit', 'J.R.R. Tolkien', '295 pages', false)
const mazeRunner = new Books('Maze Runner', 'James Dashner', '375 pages', true)
const hungerGames = new Books('The Hunger Games', 'Suzanne Collins', '374 pages', false)


let myLibrary = [theHobbit, mazeRunner, hungerGames]
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

function createTableRow(i) {
    let row = document.createElement('div')
    row.classList.add('row')
    row.id = i
    books.appendChild(row)
    createDelButton(row);
    createReadButton(row)
}

function createDelButton(row) {
    let delButton = document.createElement('button')
    delButton.value = "Delete"
    delButton.textContent = "Delete"
    delButton.addEventListener('click', function() {
        this.parentElement.remove()
    })
    row.appendChild(delButton)
}

function createReadButton(row) {
    let readButton = document.createElement('button')
    readButton.value = "Read"
    readButton.textContent = "Read"
    readButton.addEventListener('click', function() {
        let index = this.parentElement.id
        updateRead(index)
    })
    row.appendChild(readButton)
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

function updateRead(index) {
    if (myLibrary[index]['read'] === "Finished") {
        myLibrary[index]['read'] = "Haven't read yet"
    } else {
        myLibrary[index]['read'] = "Finished"
    }
    const row = document.getElementById(index)
    row.lastChild.textContent = (myLibrary[index]['read'])
}


//Add new book button that brings up a form
//let form = prompt(author, title, number of pages, read)
//add it to array of objects

//Add a button that toggles read status
//this.read = true/false