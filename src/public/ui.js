import { saveNote } from './socket.js'

const notesList = document.querySelector('#notes')

const noteUI = note => { //Sería la forma que va a tener cara nota (similiar a un componente react)
    const div = document.createElement('div')
    div.innerHTML = `
    <div>
        <h1>${note.title}</h1>
        <p>${note.description}</p>
    </div>
    `
    return div
}

export const renderNotes = notes => {
   //por cada note: al elemento HTML llamado "noteList" agregarle la porción HTML de NoteUI con los datos de note.
    notes.forEach(note => notesList.append(noteUI(note)));
}

export const onHandleSubmit = (e) => {
    e.preventDefault()
    saveNote(noteForm['title'].value, noteForm['description'].value)
}