const { MessageEmbed } = require('discord.js');


module.exports = (msg) => {
    if (msg.channel.parent.name == 'Match Reports'){
        const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${msg.channel.name} report has been awarded and closed.`)
        genChannel.send({ embeds: [exampleEmbed] });
        msg.channel.delete();
    }
    else {
        msg.channel.send('You must use this command in a match report channel');
    }
}