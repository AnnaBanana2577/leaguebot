const updateStatusChannel = require("../helpers/updateStatusChannel");
const { MessageEmbed } = require('discord.js');

module.exports = (msg) => {
    const endMessage = new MessageEmbed()
    .setTitle(`SEASON ${league.number} HAS ENDED`)
    .setColor('ff0000');

    genChannel.send( {embeds: [endMessage]} );

    const dbnumber = league.number;
    const currentSeason = Number(dbnumber)
    league.number = currentSeason + 1;
    leaderboard = {"Anna": 0};
    league.running = false;
    league.status = "Inactive";
    league.color = "e4d00a";
    
    updateStatusChannel();
}