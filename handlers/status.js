const listPlayers = require('../helpers/listPlayers');

module.exports = (msg) => {
    genChannel.send(`The status of the queue is: **${gameQueue.length}** / **6** players \nThe current players queued are: ${listPlayers()}`);
};