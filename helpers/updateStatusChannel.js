const writeDatabase = require('./writeDatbase.js');
const { MessageEmbed } = require('discord.js');
var AsciiTable = require('ascii-table')


module.exports = () => {

    //Update #league-news
    const channelNews = client.channels.cache.get(process.env.CHANNEL_LEAGUESTATUS_ID);

    channelNews.messages.fetch().then((messages) => {
        messages.forEach( (message) => {
            message.delete();
        })
    })

    const leagueStatus = new MessageEmbed()
    .setTitle('League Status')
    .setDescription(league.status)
    .setColor(league.color)
    .addField('Season', `${league.number}`, true);

    channelNews.send({ embeds: [leagueStatus] });

    //Update Leaderboard
    const channelLb = client.channels.cache.get(process.env.CHANNEL_LEADERBOARD_ID);

    channelLb.messages.fetch().then((messages) => {
        messages.forEach( (message) => {
            message.delete();
        })
    })

    var table = new AsciiTable('Leaderboard');
    table.setHeading('Rank', 'Name', 'Points');
    const topPlayers2 = Object.entries(leaderboard).sort((a,b) => b[1]-a[1]);
    let count2 = 1;
    for(let player of topPlayers2){
        table.addRow(`${count2}`, `${player[0]}`, `${player[1]}`);
        count2 += 1;
        if (count2 > 50) { break; }
    }
        
    const lb = table.toString();

    channelLb.send(`\`\`\`${lb}\`\`\``);



    //Write Database
    writeDatabase();
}