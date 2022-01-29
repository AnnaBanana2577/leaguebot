const listPlayers = require('./listPlayers.js');

module.exports = (msg) => {
    msg.channel.send(`The status of the queue is: **${gameQueue.length}** / **6** players \nThe current players queued are: ${listPlayers()}`);
};