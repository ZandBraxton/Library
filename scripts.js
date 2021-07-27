const theHobbit = new Books('The Hobbit', 'J.R.R. Tolkien', '295 pages', false)
const mazeRunner = new Books('Maze Runner', 'James Dashner', '375 pages', true)
const hungerGames = new Books('The Hunger Games', 'Suzanne Collins', '374 pages', false)


let myLibrary = [theHobbit, mazeRunner, hungerGames]
const books = document.getElementById('table')
display(myLibrary)







// display(myLibrary)
function display (myLibrary) {
    for (let i = 0; i < myLibrary.length; i++) {
            createTableRow();
            const row = document.querySelectorAll('.row')
            for (let key in myLibrary[i]) {
                let cell = document.createElement('div');
                cell.classList.add('cell')
                cell.textContent = myLibrary[i][key]
                row[i].appendChild(cell)
            }
        }
    }

function createTableRow() {
    let row = document.createElement('div')
    row.classList.add('row')
    books.appendChild(row)
    createButton(row);
}

function createButton(row) {
    let button = document.createElement('button')
    button.value = "Delete"
    button.textContent = "Delete"
    button.addEventListener('click', function() {
        this.parentElement.remove()
    })
    row.appendChild(button)
}


function Books(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    if (read === true) {
        this.read = "Read!"
    } else {
        this.read = "Haven't read yet"
    }
}


//Add new book button that brings up a form
//let form = prompt(author, title, number of pages, read)
//add it to array of objects

//Add a button that toggles read status
//this.read = true/false