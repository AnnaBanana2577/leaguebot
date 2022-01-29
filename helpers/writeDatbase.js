const fs = require('fs');

module.exports = () => {
        fs.writeFile('../data/league.json', JSON.stringify(league), () => {console.log('Wrote')});
        fs.writeFile('../data/leaderboard.json', JSON.stringify(leaderboard), () => {console.log('Wrote')});
};