module.exports = async (msg, args) => {
            msg.guild.channels.create(msg.author.username, {
                parent: "937082916368973834",
                type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
                permissionOverwrites: [
                {
                    id: msg.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
                    allow: ['VIEW_CHANNEL'], //Allow permissions
                    deny: ['SEND_MESSAGES'] //Deny permissions
                },
                {
                    id: msg.author.id, //To make it be seen by a certain role, user an ID instead
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'], //Allow permissions
                }
                ],
            });
            msg.channel.send(`**REPORT CREATED. Please post the screenshot to #${msg.author.username} and the staff will award points**`);
        
};