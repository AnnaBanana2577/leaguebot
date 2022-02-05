module.exports = () => {
    genChannel.messages.fetch().then((messages) => {
        messages.forEach( (message) => {
            message.delete();
        })
    })
};