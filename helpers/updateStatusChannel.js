const writeDatabase = require('./writeDatbase.js');
const { MessageEmbed } = require('discord.js');

module.exports = () => {
    const channel = client.channels.cache.get(process.env.CHANNEL_LEAGUESTATUS_ID);
    let out = '';
    const topPlayers = Object.entries(leaderboard).sort((a,b) => b[1]-a[1]);
    let count = 1;
    for(let player of topPlayers){
        out += `${count}) ${player[0]} - ${player[1]} \n`;
        count += 1;
        if (count > 10) { break; }
    }

    //Delete Messages
    channel.messages.fetch().then((messages) => {
        messages.forEach( (message) => {
            message.delete();
        })
    })

    //Update Status
    const leagueStatus = new MessageEmbed()
    .setTitle('League Status')
    .setDescription(league.status)
    .setColor(league.color);

    const leagueLeaderboard = new MessageEmbed()
    .setTitle("Top 10 Players")
    .setDescription(out)
    .setColor('0000FF');

    channel.send({ embeds: [leagueStatus, leagueLeaderboard] });


    //Write Database
    writeDatabase();
}