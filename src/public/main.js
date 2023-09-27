//al separar las funciones del socket y la de los eventos (ui.js) es necesario poner "type="module" en el script del HTML.  (!)
import { loadNotes, onNewNote } from './socket.js'
import { onHandleSubmit, renderNotes, appendNode } from './ui.js'

onNewNote(appendNode)
loadNotes(renderNotes)

const noteForm = document.getElementById('noteForm')
noteForm.addEventListener('submit', onHandleSubmit)