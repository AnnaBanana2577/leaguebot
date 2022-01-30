const mention = require('./mention.js');
const serverNames = ['juicy fruit', 'lemon water', 'orange crush', 'dog', 'cat', 'mouse'];
const passwords = ['apple', 'pear', 'grape', 'kiwi', 'berry'];
const { MessageEmbed } = require('discord.js');

module.exports = (msg) => {

    let players = '';
    gameQueue.forEach( (player) => {
        players += mention(player.id) + ' ';
    });

    const matchName = Math.floor(1000 + Math.random() * 9000);

    const serverName = serverNames[Math.floor(Math.random()*serverNames.length)];
    const serverPassword = passwords[Math.floor(Math.random()*passwords.length)];

    const matchStarted = new MessageEmbed()
    .setTitle("THE MATCH HAS STARTED")
    .addField("Players", `${players}`)
    .addField('Captain', `${gameQueue[0].name}`)
    .addField('Server Name', `${serverName}`)
    .addField('Password', "Check DM")
    .setColor('0000FF');

    const capMessage= new MessageEmbed()
    .setTitle(`${gameQueue[0].name}, You Are The Game Captain!`)
    .setDescription('Please create the server and remember to screenshot the score and report it by using !report')
    .setColor('FF000');

    msg.channel.send({embeds: [capMessage]});
    msg.channel.send({ embeds: [matchStarted] });
    //msg.channel.send(`**THE MATCH HAS STARTED. ${players} CHECK YOUR DM'S** ${gameQueue[0].name} is captain and will be creating the server. It might take a minute or two to show up.`);
    
    gameQueue.forEach( (player) => {
        if (player.captain == true){
            client.users.fetch(player.id, false).then((user) => {
                const dmMessage = new MessageEmbed()
                .setTitle("THE MATCH HAS STARTED")
                .addField('Captain', "YOU ARE THE CAPTAIN")
                .addField('Server Name', `${serverName}`)
                .addField('Password', `${serverPassword}`)
                .setColor('0000FF');
                user.send({embeds: [dmMessage]});
                user.send(`You are the game captain. Please create a ctf server with the information above. Also be sure to screenshot the score at the end, and report it with the !report command`);
               });
        }
        else {
            if(player.name !== 'TestPlayer'){
                client.users.fetch(player.id, false).then((user) => {
                    const dmMessage2 = new MessageEmbed()
                    .setTitle("THE MATCH HAS STARTED")
                    .addField('Captain', `${gameQueue[0]}`)
                    .addField('Server Name', `${serverName}`)
                    .addField('Password', `${serverPassword}`)
                    .setColor('0000FF');
                    user.send({embeds: [dmMessage2]});
                    //user.send(`**The match has started. Please join the capture the flag server called ${serverName} and set the password to ${serverPassword} \nThe game captaign is creatinng the server, so you may not see it show up for a minute**`);
               });
            }
        }

    });
    gameQueue = [];
};