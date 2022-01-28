module.exports = () => {
    if (gameQueue.length < 1) {
        return '**Nobody Yet**';
    }
    else {
        let out = '';
        gameQueue.forEach( (player) => {
            out += ` **${player.name}** -`
        });
    
        out = out.substring(0, out.length - 1);
        return out;
    }
}