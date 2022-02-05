const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = (name) => {

    return capitalizeString(name.toLowerCase())
}