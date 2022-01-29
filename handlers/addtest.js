const mention = require('../helpers/mention.js');
const startMatch = require('../helpers/startMatch.js');
const getStatus = require('../helpers/getStatus.js');

module.exports = (msg) => {
    let player = {
        name: 'TestPlayer',
        id: '000',
        captain: false
    };
    gameQueue.push(player);
    if(gameQueue.length == 6) {
        startMatch(msg);
    }
    else {
        msg.channel.send(`Test Player has been added to the match queue.`);
        getStatus(msg);
    }
}