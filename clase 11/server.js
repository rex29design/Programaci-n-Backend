const express = require("express")
const http = require("http") //Conexión con HTTP
const { Server } = require("socket.io") //Conexión con Server / WebSockets

const app = express()
const server = http.createServer(app)
const io = new Server(server) //Configuramos nuestro servidor de io/WebSocket

app.use(express.static("./public"))
app.get("/", (req, res) => res.sendFile("index.html")) //Nos devuelve nuestro archivo html desde la raiz principal

io.on("connection", (socket) => {
    socket.on("notificacion", data => {
        const time = new Date().toLocaleTimeString()
        console.log(`(${time}) ${data}`);

        io.sockets.emit("mensaje", data)
    })
})


server.listen(8080, () => console.log("Server running..."))