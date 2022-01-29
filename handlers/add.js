const mention = require('../helpers/mention.js');
const startMatch = require('../helpers/startMatch.js');
const getStatus = require('../helpers/getStatus.js');

module.exports = (msg) => {
    let players = gameQueue.length;

    if (players < 6) {

        let isAlreadyAdded = false;
        gameQueue.forEach( (player) => {
            let quePlayer = player.id;
            let newPlayer = msg.author.id;
            if(quePlayer === newPlayer){
                isAlreadyAdded = true;
            }
        });

        if (isAlreadyAdded) {
            genChannel.send(`You are already in the queue.`);
            getStatus(msg);
        }
        else {
            //Add the player
            let isCaptain;
            players == 0 ? isCaptain = true : isCaptain = false;
            let player = {
                name: msg.author.username,
                id: msg.author.id,
                captain: isCaptain
            }
            gameQueue.push(player);
            if(gameQueue.length == 6) {
                startMatch(msg);
            }
            else {
                genChannel.send(`${mention(msg.author.id)} has been added to the match queue.`);
                getStatus(msg);
            }
        }
    }
    else {
        genChannel.send(`Sorry ${mention(msg.author.id)}, the game queue is full right now.`);
    }
};