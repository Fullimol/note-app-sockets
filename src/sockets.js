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
            io.emit("servidor:newnote", saveNote)  //"al usar io.emit envias la info a todos los usuarios, al usar socket.emit solo envias a la ventana del navegador que se estaba usando"
        })

        socket.on('cliente:deletenote', async (id) => {
            const deletedNote = await Note.findByIdAndRemove(id);
            console.log("SE HA ELIMINADO: ", deletedNote)
            emitNotes()
        })
    })
}