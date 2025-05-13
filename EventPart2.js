const School = require('./events')

const school = new School();

school.on('event', () => {
    console.log('Event has been emitted');
}
);
school.startPeriod();