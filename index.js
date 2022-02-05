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
global.genChannel = "";

//Load Handlers
const handleClean = require('./handlers/clean');
const handleDelete = require('./handlers/delete.js');
const handleClose = require('./handlers/close.js');
const handleRemove = require('./handlers/remove');
const handleAdd = require('./handlers/add.js');
const handleDel = require('./handlers/del.js');
const handleStatus = require('./handlers/status.js');
const handleLeaderboard = require('./handlers/leaderboard.js');
const handleAward = require('./handlers/award.js');
const handleAddtest = require('./handlers/addtest.js');
const handleHelp = require('./handlers/help.js');
const handleStartseason = require('./handlers/startseason.js');
const handleEndseason = require('./handlers/endseason.js');
const handleSetstatus = require('./handlers/setStatus.js');
const updateStatusChannel = require('./helpers/updateStatusChannel.js');
const handleReset = require('./handlers/reset.js');
const handleReport = require('./handlers/report.js');

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
            if (!staff) {break;}
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
            handleReport(message, args);
            break;
        case 'award':
            if (!isSeasonrunning(message)) {break;}
            if (!staff) {break;}
            handleAward(message, args);
            break;
        case 'startseason':
            if (!staff) {break;}
            if (message.author.id !== '511603215591276584') {break;}
            handleStartseason(message);
            break;
        case 'endseason':
            if (!staff) {break;}
            if (message.author.id !== '511603215591276584') {break;}
            handleEndseason(message);
            break;
        case 'setstatus':
            if (!staff) {break;}
            if (message.author.id !== '511603215591276584') {break;}
            handleSetstatus(message, args);
            break;
        case 'reset':
            if (!staff) {break;}
            if (message.author.id !== '511603215591276584') {break;}
            handleReset(message);
            break;
        case 'remove':
            if (!staff) {break;}
            if (message.author.id !== '511603215591276584') {break;}
            handleRemove(message, args);
            break;
        case 'close':
            if (!staff) {break;}
            handleClose(message);
            break;
        case 'delete':
            if (!staff) {break;}
            handleDelete(message, args);
            break;
        case 'clear':
            if (!staff) {break;}
            gameQueue = [];
            message.channel.send('The queue has been cleared.');
            break;
}});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity(process.env.BOT_STATUS);
    genChannel = client.channels.cache.get(process.env.CHANNEL_GENERAL_ID);
    updateStatusChannel();
});

client.login(process.env.BOT_TOKEN);