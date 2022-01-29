const writeDatabase = require('../helpers/writeDatbase.js');
const { MessageEmbed } = require('discord.js');

module.exports = (msg) => {
    msg.channel.send(`**SEASON ${league.number} HAS STARTED**`)

    const channel = client.channels.cache.get(process.env.CHANNEL_LEAGUESTATUS_ID);
    channel.messages.fetch(process.env.MESSAGE_STATUS_ID).then( message => {
        const exampleEmbed = new MessageEmbed()
        .setColor('379c6f')
        .setTitle('League Status')
        .setDescription('Active');
        message.edit({embeds: [exampleEmbed]});
    });
    league.running = true;
    writeDatabase();
}