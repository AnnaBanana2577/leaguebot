const updateStatusChannel = require("../helpers/updateStatusChannel");
const { MessageEmbed } = require('discord.js');

module.exports = (msg) => {
    if(league.running == false) {
        const startMessage = new MessageEmbed()
        .setTitle(`SEASON ${league.number} HAS STARTED`)
        .setColor('00ff00');
    
        genChannel.send( {embeds: [startMessage]} );
        league.status = `Active`;
        league.color = "00ff00";
        league.running = true;
        updateStatusChannel();
    }
    else {
        msg.channel.send(`Season ${league.number} is already in progress.`);
    }
}