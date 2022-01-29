//Load Dependencies
require('dotenv').config();
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
    const isAdmin = false;
    //add check for admin and set = isAdmin
    
    switch(cmd){
        case 'help':
            handleHelp(message);
            break;
        case 'add':
            handleAdd(message)
            break;
        case 'addtest':
            handleAddtest(message)
            break;
        case 'del':
            handleDel(message);
            break;
        case 'status':
            handleStatus(message);
            break;
        case 'leaderboard':
            handleLeaderboard(message);
            break;
        case 'report':
            handleReport(message);
            break;
        case 'award':
            handleAward(message, args);
            break;
        case 'startseason':
            handleStartseason(message);
            break;
        case 'endseason':
            handleEndseason(message);
            break;
    }
  });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity(process.env.BOT_STATUS);
});

client.login(process.env.BOT_TOKEN);