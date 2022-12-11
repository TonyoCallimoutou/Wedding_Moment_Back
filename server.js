const http = require('http');
const app = require('./app');
const socketIo = require("socket.io");

const pictures = require("./app/controlers/pictures.controlers.js");

const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
        }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});

const io = socketIo(server,  {
    cors: {
      origin: "*",
      credentials: true
    }
});


server.listen(port, () => {
    console.log('Server is running')
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('addPicture', (picture) => {
        io.emit('listeningAddPicture', picture)
    });

    socket.on('removePicture', (picture) => {
        io.emit('ListeningRemovePicture', picture)
    });

    socket.on('setPicture', (picture) => {
        io.emit('ListeningSetPicture', picture)
    });

    socket.on('addComment', (picture, comment) => {
        io.emit('listeningAddComment', comment)
        io.emit('ListeningSetPicture', picture)
    });

    socket.on('removeComment', (picture, comment) => {
        io.emit('ListeningRemoveComment', comment)
        io.emit('ListeningSetPicture', picture)
    });
    
    socket.on('setComment', (comment) => {
        io.emit('ListeningSetComment', comment)
    });
    
    socket.on('setUser', (user) => {
        io.emit('ListeningSetUser', user)
    });

});
