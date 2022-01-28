const startMatch = (msg) => {
    msg.channel.send(`\`The queue is full and the match has started! Please check your DM for instructions on joining\``);
};

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
            msg.channel.send(`You are already in the queue.`);
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
            msg.channel.send(`${mention(msg.author.id)} has been added to the match queue.`);
            getStatus(msg);
            if(gameQueue.length == 6) {
                startMatch(msg);
            }
        }
    }
    else {
        msg.channel.send(`Sorry ${mention(msg.author.id)}, the game queue is full right now.`);
    }
};