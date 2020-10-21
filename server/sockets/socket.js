const { io } = require('../server');


// When User Connected
io.on('connection', (client) => {
    console.log('User Connected');
    client.emit('sendMessage', {
        user: 'Admin',
        message: 'Welcome to this App'
    });
    client.on('disconnect', () => {
        console.log('User Disconnected');
    });
    // Listening Client
    client.on('sendMessage', (data, callback) => {
        console.log(data);
        // To all the users (BROADCAST)
        client.broadcast.emit('sendMessage', data);

    });
});