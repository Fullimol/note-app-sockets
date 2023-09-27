import app from './app'
import { Server } from 'socket.io'
import http from 'http'
import sockets from './sockets' //traigo los eventos

import { connectDB } from './db'

connectDB() //se debe iniciar la base de datos antes de iniciar el server.

const server = http.createServer(app)
const httpServer = server.listen(8080)
console.log("Servidor iniciado en 8080")
const io = new Server(httpServer) //es la conexion que tendré con mi cliente

sockets(io)