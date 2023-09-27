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

// 27/09 https://www.youtube.com/watch?v=MYqpw0P31ms (1:19:03)