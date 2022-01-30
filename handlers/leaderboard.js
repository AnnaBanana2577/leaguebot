var AsciiTable = require('ascii-table')

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

    var table = new AsciiTable('Leaderboard');
    table.setHeading('Rank', 'Name', 'Points');
    const topPlayers2 = Object.entries(leaderboard).sort((a,b) => b[1]-a[1]);
    let count2 = 1;
    for(let player of topPlayers2){
        table.addRow(`${count2}`, `${player[0]}`, `${player[1]}`);
        count2 += 1;
        if (count2 > 50) { break; }
    }
        
    const lb = table.toString();

    const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Top 10 Players')
        .setDescription(lb);


        //genChannel.send({ embeds: [exampleEmbed] });
        genChannel.send(`\`\`\`${lb}\`\`\``);
};
