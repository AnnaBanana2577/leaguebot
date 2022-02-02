# Discord bot to manage an unofficial league.
Feel free to fork this repo and make it your own, this code is GPL 3 licensed.

## Clone this repo

`git clone https://github.com/AnnaBanana2577/leaguebot`

`cd leaguebot`

`npm install`

Then rename .env.example to .env and plug in the the values

## Autoreloading dev

`npm run dev`

## Production

### Pm2:
`npm run prod`

### Docker:
`sudo docker build . -t <docker_id>/<repo_name>:<tag>`
`sudo docker push <docker_id>/<repo_name>:<tag>`


## Usage

This discord bot works in conjuction with a discord server and some staff to run a competetive league.
In this case, it is being used for ninja.io.

## Commands

Add yourself to the match queue
`!add`

Remove yourself from the match queue
`!del`

Check the status of the queue
`!status`

Check the current league standings
`!leaderboard`

Report the result of a match
`!report`

## Staff Commands

Award points based on reported match result
`!award <points> <player>`

Start a new season
`!startseason`

End current season
`!endseason`

Reset the league (goes back to season 1 and resets leaderboard)
`!reset`

Clear the current match queue
`!clear`

Set the league status message
`!setstatus <message>`

