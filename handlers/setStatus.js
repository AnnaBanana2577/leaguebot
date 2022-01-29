module.exports = (msg, args) => {
    const channel = client.channels.cache.get(process.env.CHANNEL_LEAGUESTATUS_ID);
    channel.messages.fetch(process.env.MESSAGE_STATUS_ID).then( message => {
        message.edit(`\`League Status: ${args.join(' ')}\``);
        msg.channel.send(`\`Status changed to: ${args.join(' ')}\``)
    });
}