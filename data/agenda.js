const talks = require('./talks');

module.exports = {
    '8:00': {
        title: "Open gateways",
        abstract: `
            You can register on the event.
        `
    },
    '9:00': {
        title: "Opening",
        abstract: `
            <ul>
                <li>Warm welcome</li>
                <li>Short speakers introduction</li>
                <li>Some story of us</li>
            </ul>
        `
    },
    '9:30': talks[0],
    '10:00': talks[1],
    '10:30': {
        title: "Social media break",
        abstract: `
            Take part in the competition and win 2x pegasus games.
        `
    },
    '10:45': talks[2],
    '11:15': {
        title: 'Gold sponsors break',
        abstract: `
            Listen what sponsors have to say about the event.
        `
    },
    '11:30': talks[3],
    '12:00': {
        title: "Lunch"
    },
    '13:00': talks[4],
    '13:30': talks[5],
    '14:00': {
        title: 'Activity break'
    },
    '14:15': talks[6],
    '14:45': talks[7],
    '15:15': {
        title: 'Silver sponsors break',
        abstract: `
            Listen what sponsors have to say about the event.
        `
    },
    '15:30': talks[8],
    '16:00': talks[9],
    '16:30': talks[10],
    '17:00': talks[11],
    '17:30': {
        title: 'Winner contest announcement'
    },
    '17:45': {
        title: 'Close conference'
    },
    '18:00': {
        title: 'After party'
    }
};
