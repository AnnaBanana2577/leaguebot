const updateStatusChannel = require('../helpers/updateStatusChannel');

module.exports = (msg, args) => {
    if (args.length < 2) {
        msg.channel.send(`Incorrect number of parameters. Use !award [user] [points]`);
    }
    else {
        let points = args[0];
        args.shift();
        let user = args.join(' ');
        let currentPoints = 0;

        if(isFinite(points)){
            if(leaderboard.hasOwnProperty(user)){
                currentPoints = Number(leaderboard[user]);
                var awardedPoints = parseInt(points);
                var curPoints = parseInt(currentPoints);
                leaderboard[user] = curPoints + awardedPoints;
            }
            else{
                var awardedPoints = parseInt(points);
                leaderboard[user] = awardedPoints;
            }
            msg.Channel.send(`${user} has been awarded ${points} points`);
            updateStatusChannel();
        }
        else {
            msg.channel.send(`Use !award [points] [user]`);
        }
}};