module.exports = (msg) => {
    if (league.running == true){
        return true;
    }
    else{
        msg.channel.send('The league is not currently running. You can only use that command when the league is active. Check #league-status for more info.');
        return false;
    }
}