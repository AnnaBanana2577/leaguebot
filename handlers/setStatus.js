const updateStatusChannel = require("../helpers/updateStatusChannel");
const {MessageEmbed} = require('discord.js');

module.exports = (msg, args) => {
    const setMessage = new MessageEmbed()
    .setTitle(`${msg.author.username} Changed The League Status To: ${args.join(' ')}`)
    .setColor('0000FF');

    genChannel.send( {embeds: [setMessage]} );

    const writeString = args.join(' ');
    league.status = writeString;
    league.color = "0000FF";
    updateStatusChannel();
}