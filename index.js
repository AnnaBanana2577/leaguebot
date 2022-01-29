//Load Dependencies
require('dotenv').config();
const isArgs = require('./helpers/isArgs.js');
const isStaff = require('./helpers/isStaff');
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
        case 'test':
            const channel = client.channels.cache.get(process.env.CHANNEL_LEAGUESTATUS_ID);
            channel.send('Test');
    }
  });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity(process.env.BOT_STATUS);
});

client.login(process.env.BOT_TOKEN);