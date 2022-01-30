const { MessageEmbed } = require('discord.js');

module.exports = (msg) => {
    const helpMessage = new MessageEmbed()
    .setTitle("BOT COMMANDS")
    .addField('Player Commands', '!add to add \n!del to remove \n!status to check the queue \n!report to report the result of a match')
    .addField('Staff Commands', '!startseason to start a season \n!endseason to end a season \n!reset to reset everything \n!award <points> <user> to award points')
    .setColor('0000FF');

    msg.channel.send({ embeds: [helpMessage] });
   // msg.channel.send(`Use **!add** to add yourself to the match queue \nUse **!del** to remove youself from the match queue \nUse **!status** to get the status of the match queue`);
};