//Load Dependencies
require('dotenv').config();
const isArgs = require('./helpers/isArgs.js');
const isStaff = require('./helpers/isStaff');
const { MessageEmbed } = require('discord.js');
const isSeasonrunning = require('./helpers/isSeasonrunning.js');
const fs = require('fs');
const Discord = require('discord.js');
global.client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
global.leaderboard = require('./data/leaderboard.json');
global.league = require('./data/league.json');

//Load Handlers
const handleAdd = require('./handlers/add.js');
const handleDel = require('./handlers/del.js');
const handleStatus = require('./handlers/status.js');
const handleLeaderboard = require('./handlers/leaderboard.js');
const handleAward = require('./handlers/award.js');
const handleReport = require('./handlers/report.js');
const handleAddtest = require('./handlers/addtest.js');
const handleHelp = require('./handlers/help.js');
const handleStartseason = require('./handlers/startseason.js');
const handleEndseason = require('./handlers/endseason.js');
const handleSetstatus = require('./handlers/setStatus.js');

//Global Vars
global.gameQueue = [];

//Parse Commands And Arguments
client.on('message', message => {
    if (!message.content.startsWith('!')) return;
    if (message.author.id == process.env.BOT_ID) return;
  
    let args = message.content.trim().split(/ +/g);
    const cmd = args[0].slice(1).toLowerCase();
    args.shift();
  
    const argsNum = args.length;
    const staff = isStaff(message);
    //add check for admin and set = isAdmin
    
    switch(cmd){
        case 'help':
            handleHelp(message);
            break;
        case 'add':
            if (!isSeasonrunning(message)) {break;}
            handleAdd(message)
            break;
        case 'addtest':
            if (!isSeasonrunning(message)) {break;}
            handleAddtest(message)
            break;
        case 'del':
            if (!isSeasonrunning(message)) {break;}
            handleDel(message);
            break;
        case 'status':
            if (!isSeasonrunning(message)) {break;}
            handleStatus(message);
            break;
        case 'leaderboard':
            if (!isSeasonrunning(message)) {break;}
            handleLeaderboard(message);
            break;
        case 'report':
            if (!isSeasonrunning(message)) {break;}
            handleReport(message);
            break;
        case 'award':
            if (!isSeasonrunning(message)) {break;}
            if (!isArgs(argsNum, 2)) {break;}
            if (!staff) {break;}
            handleAward(message, args);
            break;
        case 'startseason':
            if (!staff) {break;}
            handleStartseason(message);
            break;
        case 'endseason':
            if (!staff) {break;}
            handleEndseason(message);
            break;
        case 'setstatus':
            if (!staff) {break;}
            handleSetstatus(message, args);
            break;
        //case 'test':
          //  const exampleEmbed = new MessageEmbed()
           // .setColor('#0099ff')
          //  .setTitle('How This Works')
          //  .setDescription("**__League Format__** \n The league will run in periods of 4 weeks (called seasons). During the season, players may play matches of 3v3 capture the flag by typing !add. Once 6 players are added, the match begins. The bot will DM each of the 6players with server name and password information. The bot will randomly choose 1 player to be the 'Captain'. The captain is responsible for creating the sevrer, and uploading a screenshot of the scoreboard at the end of the game to #match-reports. \n\n **__Awarding Points__**\nAfter screenshots are reported, the League Staff reviews the match report and awards points as follows \n\n1 point to every player\n2 points to every player on the winning tream\n2 Points to the player on the winning team with the most flag captures \n\n**__Bot Commands__**\n!add to add yourself to the match queue\n!del to remove yourself from the match queue\n!status to check the current status of the match queue\n!leaderboard to show the current leaderboard\n!report to report the match result with a screenshot\n\n**__Staff Bot Commands__**\n!startseason to start a new season\n!endseason to end the current season\n!setstatus to set the league status\!award to award points based on match report");
          //  const channel = client.channels.cache.get('936017207660531712');
          //  channel.send({ embeds: [exampleEmbed] });

}});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity(process.env.BOT_STATUS);
});

client.login(process.env.BOT_TOKEN);