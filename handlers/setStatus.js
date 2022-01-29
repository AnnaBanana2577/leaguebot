const { MessageEmbed } = require('discord.js');
const writeDatbase = require('../helpers/writeDatbase');


module.exports = (msg, args) => {
    const channel = client.channels.cache.get(process.env.CHANNEL_LEAGUESTATUS_ID);
    channel.messages.fetch(process.env.MESSAGE_STATUS_ID).then( message => {
            const exampleEmbed = new MessageEmbed()
            .setColor('FF0000')
            .setTitle('League Status')
            .setDescription(args.join(' '));
            message.edit({embeds: [exampleEmbed]});
      //  message.edit(`\`League Status: ${args.join(' ')}\``);
        msg.channel.send(`\`Status changed to: ${args.join(' ')}\``)
    });
    const writeString = args.join(' ');
    league.status = writeString;
    writeDatbase();
}