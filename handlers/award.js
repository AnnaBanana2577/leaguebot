module.exports = (msg, args) => {
    if (args.length !== 3) {
        msg.channel.send(`Incorrect number of parameters. Use !award [user] [points]`);
    }
    else {
        let user = args[1];
        let points = args[2];
        msg.channel.send(`${points} points have been awarded to ${user}`);
    }
};