// (lado del cliente)
const socket = io()

export const loadNotes = (callback) =>{
    socket.on('loadnotes', callback)
}

export const saveNote = (title, description) => {
    socket.emit("newnote", {
        title,
        description
    })
}

// 26/09 https://www.youtube.com/watch?v=MYqpw0P31ms (43:36)