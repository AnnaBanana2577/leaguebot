module.exports = (msg, args) => {
    const name = args.join(' ');
    isAdded = false;
    gameQueue.forEach((player) => {
        if (name == player.name) {
            isAdded = true;
        }
    });

    if (isAdded){
        gameQueue = gameQueue.filter((player) => {return player.name != name});
        msg.channel.send(`${name} has been removed from the match queue.`);
    }
    else {
        msg.channel.send(`${name} is not in the match queue.`);
    }
}