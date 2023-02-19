const http = require('http');
const app = require('./app');
const socketIo = require("socket.io");

const posts = require("./app/controlers/posts.controlers.js");

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

const port = normalizePort(process.env.PORT || '3000');
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

const io = socketIo(server, {
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

    socket.on('addPost', (post) => {
        io.emit('listeningAddPost', post)
    });

    socket.on('removePost', (post) => {
        io.emit('listeningRemovePost', post)
    });

    socket.on('setPost', (post) => {
        io.emit('listeningSetPost', post)
    });

    socket.on('setEvent', (event) => {
        io.emit('listeningSetEvent', event)
    });

    socket.on('addInvite', (invite) => {
        io.emit('listeningAddInvite', invite)
    });

    socket.on('removeInvite', (invite) => {
        io.emit('listeningRemoveInvite', invite)
    });

    socket.on('setInvite', (invite) => {
        io.emit('listeningSetInvite', invite)
    });

    socket.on('addPlanTable', (planTable) => {
        io.emit('listeningAddPlanTable', planTable)
    });

    socket.on('removePlanTable', (planTable) => {
        io.emit('listeningRemovePlanTable', planTable)
    });

    socket.on('setPlanTable', (planTable) => {
        io.emit('listeningSetPlanTable', planTable)
    });

    socket.on('addMenu', (menu) => {
        io.emit('listeningAddMenu', menu)
    });

    socket.on('removeMenu', (menu) => {
        io.emit('listeningRemoveMenu', menu)
    });

    socket.on('setMenu', (menu) => {
        io.emit('listeningSetMenu', menu)
    });

    socket.on('setUser', (user) => {
        io.emit('listeningSetUser', user)
    });

});
