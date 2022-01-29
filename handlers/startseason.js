const writeDatabase = require('../helpers/writeDatbase.js');

module.exports = (msg) => {
    msg.channel.send(`**SEASON ${league.number} HAS STARTED**`)
    const channel = client.channels.cache.get(process.env.CHANNEL_LEAGUESTATUS_ID);
    channel.messages.fetch(process.env.MESSAGE_STATUS_ID).then( message => {
        message.edit(`League Status: Active | Season ${league.number} Ends in 4 weeks`);
    });
    league.running = true;
    writeDatabase();
}