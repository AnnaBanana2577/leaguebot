const writeDatabase = require('../helpers/writeDatbase.js');
const { MessageEmbed } = require('discord.js');


module.exports = (msg) => {
    msg.channel.send(`**SEASON ${league.number} HAS ENDED**`)

    const dbnumber = league.number;
    const currentSeason = Number(dbnumber)
    league.number = currentSeason + 1;
    leaderboard = {"Anna": 0};
    league.running = false;
    writeDatabase();

    const channel = client.channels.cache.get(process.env.CHANNEL_LEAGUESTATUS_ID);
    channel.messages.fetch(process.env.MESSAGE_STATUS_ID).then( message => {


        const exampleEmbed = new MessageEmbed()
        .setColor('e4d00a')
        .setTitle('League Status')
        .setDescription('Inactive');
        message.edit({embeds: [exampleEmbed]});
        league.status = 'Inactive';
        writeDatabase();
    });

    const channel2 = client.channels.cache.get(process.env.CHANNEL_LEAGUESTATUS_ID);
    channel2.messages.fetch(process.env.MESSAGE_LEADERBOARD_ID).then( message => {
        const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Top 10 Players')
        .setDescription('Noone yet');

        message.edit({ embeds: [exampleEmbed] });
    });

}