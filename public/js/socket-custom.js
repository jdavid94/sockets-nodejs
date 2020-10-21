let socket = io();
socket.on('connect', function() {
    console.log('Server Connected');
});
// On to listeng information
socket.on('disconnect', function() {
    console.log('Connection Lost');
});
// Emit to send Information
socket.emit('sendMessage', {
    user: 'Jesus',
    message: 'Hello World'
}, function(resp) {
    console.log('From Server', resp);
});
// Listen Information
socket.on('sendMessage', function(resp) {
    console.log('Server : ', resp);
});