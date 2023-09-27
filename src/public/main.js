//al separar las funciones del socket y la de los eventos (ui.js) es necesario poner "type="module" en el script del HTML.  (!)
import { loadNotes } from './socket.js'
import { onHandleSubmit } from './ui.js'
const socket = io()

loadNotes()

const noteForm = document.getElementById('noteForm')
noteForm.addEventListener('submit', onHandleSubmit)