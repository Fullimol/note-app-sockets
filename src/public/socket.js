// (lado del cliente)
const socket = io()

export const loadNotes = (callback) => {
    socket.on('servidor:loadnotes', callback)
}

export const saveNote = (title, description) => {
    socket.emit("cliente:newnote", {
        title,
        description
    })
}

//mostrar la nota nueva
export const onNewNote = (callback) => {
    socket.on('servidor:newnote', callback)
}

export const deleteNote = (id) => {
    socket.emit("cliente:deletenote", id)
}

export const getNoteById = (id) => {
    socket.emit("cliente:getnotebyid", id)
}

export const onSelected = (callback) => {
    socket.on('servidor:selectednote', callback)
}

export const updateNote = (id, title, description) => {
    socket.emit('cliente:updatenote', {
        id, title, description
    })
}