// For event we need  to create a new event

const Event = require('events');
const eventEmitter = new Event.EventEmitter();

eventEmitter.on('event', () => {
    console.log('Event is fired');
});

eventEmitter.emit('event');