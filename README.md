# Discord bot to manage an unofficial league.
Feel free to fork this repo and make it your own, this code is GPL 3 licensed.

### Forking

Clone this repo

`git clone https://github.com/AnnaBanana2577/leaguebot`

Then

`cd leaguebot`

And

`npm install`

Then start an autoreloading local dev server

`npm run dev`

For production

`npm run prod`

Then rename .env.example to .env and plug in the enviroment variables

### Usage

This discord bot works in conjuction with a discord server and some staff to run a competetive league.
In this case, it is being used for ninja.io.

#### Commands

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

Award points based on reported match result (for staff only)
`!award <player> <points>`

### This README is a work in progress
