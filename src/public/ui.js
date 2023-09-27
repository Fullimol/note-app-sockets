import { saveNote, deleteNote } from './socket.js'

const notesList = document.querySelector('#notes')

//Sería la forma que va a tener cara nota (similiar a un componente react)
const noteUI = note => {
    const div = document.createElement('div')
    div.innerHTML = `
    <div>
        <h1>${note.title}</h1>
        <button class="delete" data-id="${note._id}">Delete</button>
        <button>Update</button>
        <p>${note.description}</p>
    </div>
    `
    const btnDelete = div.querySelector('.delete')
    btnDelete.addEventListener('click', (e) => {
        deleteNote(btnDelete.dataset.id)
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
    saveNote(noteForm['title'].value, noteForm['description'].value)
}

export const appendNode = note => {
    notesList.append(noteUI(note))
}