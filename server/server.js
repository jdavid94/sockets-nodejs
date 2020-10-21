const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
const app = express();
// Enviamos por argumento app express al server
let server = http.createServer(app);

// Shared Public Folder 
const publicPath = path.resolve(__dirname, '../public');
// Port for development or Production
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = Connection with the Server (BACKEND)
module.exports.io = socketIO(server);
// Call socket file
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Running in port ${ port }`);

});