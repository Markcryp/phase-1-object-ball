function gameObject() {
    return {
        home: {
       teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            "Brook Lopez":  {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 6,
                blocks: 8,
                slamDunks: 5
            },
            "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 7,
                slamDunk: 2
            },
        }
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks:7,
                slamDunks: 2
            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },
            "Desagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 5,
                slamDunks: 0
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 1
            },
            "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
             }
          }
      }
   };
}

// Function to get the number of points scored by a player
function numPointsScored(playername) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players[playername]) {
            return game[team].players[playerName].points;
        }
    }
    return null;
}

// Function to get the shoe size of a player
function shoesize(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players[playername]) {
            return game[team].players[playername].shoe;
        }
    }
    return null;
}

// Function to get the colors of a team
function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
    return null;
}

// Function to get the names of all teams
function teamNames() {
    const game = gameObject();
    const teamNamesArray = [];
    for (const team in game) {
        teamNamesArray.push(game[team].teamName);
    }
    return teamNamesArray
}

// Function to get the jersey number of all players in a team
function playerNumbers(teamName) {
    const game = gameObject();
    const jerseyNumbers = [];
    for (const team in game) {
        if (game[team].teamName === teamName){
            for (const player in game[team].players){
                jerseyNumberw.push(game[team].players[players].number);
            }
            return jerseyNumber
        }
    }
    return null
}

// Function to get the stats of a player
function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName];
       }
    }
    return null
}

// Function to find the number of rebounds for the player with the largest shoe size
function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;

    for (const team in game) {
        for (const player in game[team].players) {
            const playerInfo = game[team].players[player];
            if (playerInfo.shoe > largestShoeSize){
                largestShoeSize = playerInfo.shoe;
                rebounds = playerInfo.rebounds;
            }
        }
    }
    return rebounds;
}

function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topPlayer = ""


    for (const team of Object.values(game)) {
        for (const [player, stats] of Object.entries(team.players)) {
            if (stats.points > maxPoints) {
                maxPoints = stats.points;
                topPlayer = player
            }
        }
    }
    return topPlayer;
}


function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;

    for (const player of Object.values(game.home.players)) {
        homeoints += player.points;       
    }
    for (const player of Object.values(game.away.players)) {
        awayPoints += player.points;
    }
    return homepoints > awayPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";

    for (const team of Object.values(game)) {
        for (const player of Object.keys(team.players)){
            if (player.length > longestName.lenght) {
                longestName = player;
             }
         }    
     }
     return longestName;
}

