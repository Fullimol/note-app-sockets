// (lado del servidor)
// Este archivo sirve para tener separado los eventos del sockets.
import Note from './models/Note'

export default (io) => {
    io.on('connection', (socket) => {
        //trae las notas de la BD a cada cliente
        const emitNotes = async () => {
            const notes = await Note.find()
            io.emit('loadnotes', notes)
        }
        emitNotes()

        socket.on('newnote', (data) => {
            console.log(data)
        })
    })
}