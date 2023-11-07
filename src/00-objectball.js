function gameObject() {
    const game = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson":{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1
                },
                "Reggie Evans": {
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7
                },
                "Brook Lopez": {
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15
                },
                "Mason Plumlee": {
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5
                },
                "Jason Terry": {
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1
                },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien":{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2
                },
                "Bismak Biyombo": {
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10
                },
                "DeSagna Diop": {
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5
                },
                "Ben Gordon": {
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0
                },
                "Brendan Haywood": {
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12
                },
            }
        }
    }; 
    return game; 
}

function numPointsScored(playerName) {
    let game = gameObject();
    for (let gameKey in game) {
      // are you ABSOLUTELY SURE what 'gameKey' is?
      // use the debugger to find out!
      let teamObj = game[gameKey];
      for (let teamKey in teamObj) {
        // are you ABSOLUTELY SURE what 'teamKey' is?
        // use debugger to find out!
        
        // what is 'data' at each loop through out this block?
        // when will the following line of code work and when will it break?
        let data = teamObj.players;
        for (let playerKey in data) {
          if(playerKey === playerName){
            let points = data[playerName]['points'];
            return points;
          }
        }
      }
    }
  }

  const pointsScored = numPointsScored("Jason Terry");
  console.log(pointsScored);

  function shoeSize(playerName) {
    let game = gameObject();
    for (let gameKey in game) {
      // are you ABSOLUTELY SURE what 'gameKey' is?
      // use the debugger to find out!
      let teamObj = game[gameKey];
      for (let teamKey in teamObj) {
        // are you ABSOLUTELY SURE what 'teamKey' is?
        // use debugger to find out!
        
        // what is 'data' at each loop through out this block?
        // when will the following line of code work and when will it break?
        let data = teamObj.players;
        for (let playerKey in data) {
          if(playerKey === playerName){
            let shoe = data[playerName]['shoe'];
            return shoe;
          }
        }
      }
    }
  }

  const shoeSizePlayer = shoeSize("Jason Terry");
  console.log(shoeSizePlayer);

  function teamColors(teamName) {
    let game = gameObject();
    for (let gameKey in game) {
      // are you ABSOLUTELY SURE what 'gameKey' is?
      // use the debugger to find out!
      let teamObj = game[gameKey];
      for (let teamKey in teamObj) {
        // are you ABSOLUTELY SURE what 'teamKey' is?
        // use debugger to find out!
        return teamObj['colors'];
        // what is 'data' at each loop through out this block?
        }
      }
    }
  
const colors = teamColors('Brooklyn Nets');
console.log(teamColors);

function teamNames(){
    let game = gameObject();
    let teamNameArray = [];
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        teamNameArray.push(teamObj['teamName']);
    }
    return teamNameArray;
}

const names = teamNames();
console.log(names);

function playerNumbers(nameOfTeam) {
    let game = gameObject();
    for (let gameKey in game) {
      // are you ABSOLUTELY SURE what 'gameKey' is?
      // use the debugger to find out!
      let teamObj = game[gameKey];
      for (let teamKey in teamObj) {
        // are you ABSOLUTELY SURE what 'teamKey' is?
        // use debugger to find out!
        if(teamObj[teamKey] === nameOfTeam){
            let data = teamObj.players;
            let numbers = [];
            for (let playerKey in data) {
                let number = data[playerKey]['number'];
                numbers.push(number);
            }
            return numbers;
            }
        
        }
    }
}

const nums = playerNumbers('Brooklyn Nets');
console.log(nums);

function playerStats(nameOfPlayer) {
    let game = gameObject();
    for (let gameKey in game) {
      // are you ABSOLUTELY SURE what 'gameKey' is?
      // use the debugger to find out!
      let teamObj = game[gameKey];
      for (let teamKey in teamObj) {
        // are you ABSOLUTELY SURE what 'teamKey' is?
        // use debugger to find out!
        let data = teamObj.players;
        for (let playerKey in data) {
            if(playerKey === nameOfPlayer){
                return data[playerKey]
            }
        }
        }
        
    }
}


const stats = playerStats('Jason Terry');
console.log(stats);

function bigShoeRebounds() {
    let game = gameObject();
    let biggestShoeSize = 0;
    let playerName = null;
    let playerData = null;
    for (let gameKey in game) {
      // are you ABSOLUTELY SURE what 'gameKey' is?
      // use the debugger to find out!
      let teamObj = game[gameKey];
      
      for (let teamKey in teamObj) {
        // are you ABSOLUTELY SURE what 'teamKey' is?
        // use debugger to find out!
        data = teamObj.players;
        for (let playerKey in data) {
            let shoeSize = data[playerKey]['shoe'];
            if(biggestShoeSize < shoeSize) {
                biggestShoeSize = shoeSize;
                playerName = playerKey;
                playerData = data;
            }
        }
        
    }
}
    return playerData[playerName]['rebounds'];
}

const highestRebounds = bigShoeRebounds();
console.log(highestRebounds);

