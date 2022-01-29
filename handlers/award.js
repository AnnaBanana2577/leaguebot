const writeDatabase = require('../helpers/writeDatbase');
const { MessageEmbed } = require('discord.js');

module.exports = (msg, args) => {
    if (args.length !== 2) {
        msg.channel.send(`Incorrect number of parameters. Use !award [user] [points]`);
    }
    else {
        let user = args[0];
        let points = args[1];
        let currentPoints = 0;

        if(leaderboard.hasOwnProperty(user)){
            currentPoints = Number(leaderboard[user]);
            let awardedPoints = parseInt(points);
            let curPoints = parseInt(currentPoints);
            leaderboard[user] = curPoints + awardedPoints;
        }
        else{
            let awardedPoints = parseInt(points);
            leaderboard[user] = awardedPoints;
        }
        writeDatabase();
        msg.channel.send(`${points} points have been awarded to ${user}`);
        const channel = client.channels.cache.get(process.env.CHANNEL_LEAGUESTATUS_ID);
        channel.messages.fetch(process.env.MESSAGE_LEADERBOARD_ID).then( message => {
            let out = '';
            const topPlayers = Object.entries(leaderboard).sort((a,b) => b[1]-a[1]);
            let count = 1;
            for(let player of topPlayers){
                out += `${count}) ${player[0]} - ${player[1]} \n`;
                count += 1;
                if (count > 10) { break; }
            }
            const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Top 10 Players')
            .setDescription(out);
                message.edit({embeds: [exampleEmbed]});
        });

}};