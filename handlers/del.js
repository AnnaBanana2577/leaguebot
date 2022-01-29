const getStatus = require('../helpers/getStatus.js');

module.exports = (msg) => {
    let newPlayer = msg.author.id;
    let isAdded = false;
    gameQueue.forEach( (player) => {
        if (player.id === newPlayer) {
            isAdded = true;
        }
    });

    if (isAdded) {
        gameQueue = gameQueue.filter(function(ob){ return(ob.id !== msg.author.id) });
        msg.channel.send("You've been removed from the match queue.");
        getStatus(msg);
    }
    else {
        msg.channel.send("You are not in the queue.");
        getStatus(msg);
    }
};