const sanitizeName = require('../helpers/sanitizeName.js');
const updateStatusChannel = require('../helpers/updateStatusChannel.js');

module.exports = (msg, args) => {
    const name = sanitizeName(args.join(' '));
    if (leaderboard.hasOwnProperty(name)) {
        delete leaderboard[name];
        msg.channel.send(`${name} has been removed from the leaderboard`);
        updateStatusChannel();
    }
    else {
        msg.channel.send('That player is not on the leaderboard.');
    }
}