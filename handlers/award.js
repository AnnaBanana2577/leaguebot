const writeDatabase = require('../helpers/writeDatbase');

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
        writeDatabase();
        msg.channel.send(`${points} points have been awarded to ${user}`);
        //Add message to #league-standings
        //message id = 936468562367885342
        //channel id = 936033981114224710
        const channel = client.channels.cache.get("936033981114224710");
        channel.messages.fetch({ limit: 100 }).then(messages => {
            console.log(`Received ${messages.size} messages`);
            //Iterate through the messages here with the variable "messages".
            messages.forEach(message => message.delete())
          })

        let out = '';
        const topPlayers = Object.entries(leaderboard).sort((a,b) => b[1]-a[1]);
        let count = 1;
        for(let player of topPlayers){
            out += `${count}) ${player[0]} - ${player[1]} \n`;
            count += 1;
            if (count > 10) { break; }
        }
        //msg.channel.send("```Top 10 Players Currently: \n\n" + out + "```");
        channel.send("```Top 10 Players Currently: \n\n" + out + "```");
    }
};