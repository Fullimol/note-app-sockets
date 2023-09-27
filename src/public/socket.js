// (lado del cliente)
const socket = io()

//escuchamos el evento llamado 'loadnotes' y mostramos la data que trae del 'sockets.js'
export const loadNotes = () =>{
    socket.on('loadnotes', (data) => {
        console.log("loadnotes:", data)
    })
}

export const saveNote = (title, description) => {
    socket.emit("newnote", {
        title,
        description
    })
}

// 26/09 https://www.youtube.com/watch?v=MYqpw0P31ms (43:36)