const updateStatusChannel = require("../helpers/updateStatusChannel");
const { MessageEmbed } = require('discord.js');

module.exports = (msg) => {
    if (league.running == true) {
        msg.channel.send('You cannot reset the league while it is active. Use !endseason first.'); 
    }
    else {
        league = {"status": "Inactive", "color": "e4d00a", "running": false, "number": 1};
        leaderboard = {"Bisrat": 0};
        const resetMessage = new MessageEmbed()
        .setTitle(`THE LEAGUE HAS BEEN RESET`)
        .setColor('ff0000');
    
        genChannel.send( {embeds: [resetMessage]} );
        updateStatusChannel();
    }
}