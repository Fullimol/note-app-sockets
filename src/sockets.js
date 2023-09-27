// (lado del servidor)
// Este archivo sirve para tener separado los eventos del sockets.
import Note from './models/Note'

export default (io) => {
    io.on('connection', (socket) => {
        //trae las notas de la BD a cada cliente
        const emitNotes = async () => {
            const notes = await Note.find()
            io.emit('servidor:loadnotes', notes)
        }
        emitNotes()

        socket.on('cliente:newnote', async (data) => {
            const newNote = new Note({
                title: data.title,
                description: data.description
            })
            const saveNote = await newNote.save()
            // console.log("saveNote: ", saveNote)
            socket.emit("servidor:newnote", saveNote)
        })
    })
}