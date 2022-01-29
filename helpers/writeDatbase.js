const fs = require('fs');

module.exports = () => {
        fs.writeFile('./data/league.json', JSON.stringify(league), (err) => {
                if (err) { console.log(err) }
                else { console.log('wrote db'); }
        });

        fs.writeFile('./data/leaderboard.json', JSON.stringify(leaderboard), (err) => {
                if (err) { console.log(err) }
                else { console.log('wrote db'); }
        })
};