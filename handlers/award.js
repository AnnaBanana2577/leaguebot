const updateStatusChannel = require('../helpers/updateStatusChannel');

module.exports = (msg, args) => {
    if (args.length !== 2) {
        msg.channel.send(`Incorrect number of parameters. Use !award [user] [points]`);
    }
    else {
        let user = args[0];
        let points = args[1];
        let currentPoints = 0;

        if(leaderboard.hasOwnProperty(user)){
            currentPoints = Number(leaderboard[user]);
            let awardedPoints = parseInt(points);
            let curPoints = parseInt(currentPoints);
            leaderboard[user] = curPoints + awardedPoints;
        }
        else{
            let awardedPoints = parseInt(points);
            leaderboard[user] = awardedPoints;
        }
        updateStatusChannel();
}};