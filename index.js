//Load Dependencies
require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

//Load Data
let leaderboard = require('./data/leaderboard.json');
let league = require('./data/league.json');

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
var gameQueue = [];

//Parse Commands And Arguments
client.on('message', message => {
    if (!message.content.startsWith('!')) return;
    if (message.author.id == '936018873021517846') return;
  
    let args = message.content.trim().split(/ +/g);
    const cmd = args[0].slice(1).toLowerCase();
    args.shift();
  
    const argsNum = args.length;
    const isAdmin = false;
    //add check for admin and set = isAdmin
    
    switch(cmd){
        case 'help':
            handleHelp(msg);
            break;
        case 'add':
            handleAdd(msg)
            break;
        case 'addtest':
            handleAddtest(msg)
            break;
        case 'del':
            handleDel(msg);
            break;
        case 'status':
            handleStatus(msg);
            break;
        case 'leaderboard':
            handleLeaderboard(msg);
            break;
        case 'report':
            handleReport(msg);
            break;
        case 'award':
            handleAward(msg);
            break;
        case 'startseason':
            handleStartseason(msg);
            break;
        case 'endseason':
            handleEndseason(msg);
            break;
    }
  });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity(process.env.BOT_STATUS);
});

client.login(process.env.BOT_TOKEN);