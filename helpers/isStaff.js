module.exports = (msg) => {
        if (msg.member.roles.cache.some(role => role.name === 'League Staff')) {
            return true;
        }
        else {
            return false;
        }
};