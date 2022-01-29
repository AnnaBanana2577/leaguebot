const writeDatabase = require('../helpers/writeDatbase.js');

module.exports = (msg) => {
    msg.channel.send(`**SEASON ${league.number} HAS ENDED**`)

    const dbnumber = league.number;
    const currentSeason = Number(dbnumber)
    league.number = currentSeason + 1;
    leaderboard = {"Anna": 0};
    league.running = false;
    writeDatabase();

    const channel = client.channels.cache.get(process.env.CHANNEL_LEAGUESTATUS_ID);
    channel.messages.fetch(process.env.MESSAGE_STATUS_ID).then( message => {
        const stat = `League Status: Inactive | Season ${league.number} starts soon`;
        message.edit(stat);
        league.status = stat;
        writeDatabase();
    });

    const channel2 = client.channels.cache.get(process.env.CHANNEL_LEAGUESTATUS_ID);
    channel2.messages.fetch(process.env.MESSAGE_LEADERBOARD_ID).then( message => {
        message.edit("```Top 10 Players Currently: \n\n The new season hasn't started here, once it starts you'll see the leaderboard here```");
    });

}