// For event we need  to create a new event

const Event = require('events');


class School extends Event {
    startPeriod() {
        setTimeout(() => {
    this.emit('event');
   }, 1000);
    }
   
}

module.exports = School;

