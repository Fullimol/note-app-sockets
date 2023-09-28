import { saveNote, deleteNote, getNoteById, onSelected, updateNote } from './socket.js'

const notesList = document.querySelector('#notes')
const title = document.querySelector('#title')
const description = document.querySelector('#description')

let saveID = ""

//Sería la forma que va a tener cara nota (similiar a un componente react)
const noteUI = note => {
    const div = document.createElement('div')
    div.innerHTML = `
    <div>
        <h1>${note.title}</h1>
        <button class="delete" data-id="${note._id}">Delete</button>
        <button class="update" data-id="${note._id}">Update</button>
        <p>${note.description}</p>
    </div>
    `
    const btnDelete = div.querySelector('.delete')
    const btnUpdate = div.querySelector('.update')

    btnDelete.addEventListener('click', (e) => {
        deleteNote(btnDelete.dataset.id)
    })
    btnUpdate.addEventListener('click', (e) => {
        getNoteById(btnUpdate.dataset.id)
    })

    return div
}

export const renderNotes = notes => {
    notesList.innerHTML = ""; //esto hace que se carge el vacío (evita que se duplique el array al eliminar una nota)
    //por cada note: al elemento HTML llamado "noteList" agregarle la porción HTML de NoteUI con los datos de note.
    notes.forEach(note => notesList.append(noteUI(note)));
}

export const onHandleSubmit = (e) => {
    e.preventDefault()
    if (saveID) {
        updateNote(saveID, title.value, description.value)
    } else {
        saveNote(title.value, description.value)
    }

    //reseteamos los valores
    saveID = ""
    title.value = ""
    description.value = ""
}

export const appendNode = note => {
    notesList.append(noteUI(note))
}

// Este se encarga de llenar el formulario con los datos de la nota a editar.
export const fillForm = note => {
    onSelected(
        title.value = note.title,
        description.value = note.description,
        saveID = note._id
    )
}