module.exports = (msg) => {
    let player = {
        name: 'TestPlayer',
        id: '1',
        captain: false
    };
    gameQueue.push(player);
    msg.channel.send(`Test Player has been added to the match queue.`);
    getStatus(msg);
    if(gameQueue.length == 6) {
        startMatch(msg);
    }
}