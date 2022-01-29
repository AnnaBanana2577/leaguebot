const { MessageEmbed } = require('discord.js');

module.exports = (msg) => {
    let out = '';

    const topPlayers = Object.entries(leaderboard).sort((a,b) => b[1]-a[1]);
    let count = 1;
    for(let player of topPlayers){
        out += `${count}) ${player[0]} - ${player[1]} \n`;
        count += 1;
        if (count > 10) { break; }
    }

    const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Top 10 Players')
        .setDescription(out);


        msg.channel.send({ embeds: [exampleEmbed] });
};
