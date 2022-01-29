const mention = require('./mention.js');

module.exports = (msg) => {

    let players = '';
    gameQueue.forEach( (player) => {
        players += mention(player.id) + ' ';
    });
    msg.channel.send(`**THE MATCH HAS STARTED. ${players} CHECK YOUR DM'S**`);

    const serverName = Math.floor(1000 + Math.random() * 9000);
    const serverPassword = Math.floor(1000 + Math.random() * 9000);

    
    gameQueue.forEach( (player) => {
        if (player.captain == true){
            client.users.fetch(player.id, false).then((user) => {
                user.send(`**The match has started. YOU ARE THE GAME CAPTAIN. Please create a capture the flag server called ${serverName} and set the password to ${serverPassword} \n When the match is over, please take a screenshot of the scoreboard and post it in the #match-reports channel.**`);
               });
        }
        else if(player.name = 'TestPlayer'){
            console.log('nope');
        }
        else {
            client.users.fetch(player.id, false).then((user) => {
                if (player.name !== 'TestPlayer'){
                    user.send(`**The match has started. Please join the capture the flag server called ${serverName} and set the password to ${serverPassword} \nThe game captaign is creatinng the server, so you may not see it show up for a minute**`);
                }
               });
        }

    });
    gameQueue = [];
};