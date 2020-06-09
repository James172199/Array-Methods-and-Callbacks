let fifaData = require("./fifa");
console.log(fifaData);

console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
console.log(fifaData[828]["Home Team Name"]);
console.log(fifaData[828]["Away Team Name"]);
console.log(fifaData[828]["Home Team Goals"]);
console.log(fifaData[828]["Away Team Goals"]);
console.log(fifaData[828]["Win conditions"]);

/*function getHomeName(data) {
  var home = "";
  for (var obj of data) {
      if(obj.Year == 2014 && obj.Stage == "Final")
      {
          home = obj["Home Team Name"];  
      }
  }
  return home;
}
console.log(getHomeName(fifaData));*/

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
  return data.filter((state) => {
    return state.Stage === "Final";
  });
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
  var years = [];
  var x = 0;
  for (var obj of callback) {
    years[x] = obj.Year;
    x++;
  }
  return years;
}
console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(callback) {
  var winners = [];
  for (var x = 0; x < callback.length; x++) {
    if (callback[x]["Home Team Goals"] > callback[x]["Away Team Goals"]) {
      winners[x] = callback[x]["Home Team Name"];
    } else if (
      callback[x]["Home Team Goals"] < callback[x]["Away Team Goals"]
    ) {
      winners[x] = callback[x]["Away Team Name"];
    }
  }
  winners = winners.filter((item) => item);
  return winners;
}
console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback1, callback2) {
  var Arr = [];
  for (var x = 0; x < callback1.length; x++) {
    Arr[x] = "In " + callback2[x] + ", " + callback1[x] + " won the world cup!";
  }
  return Arr;
}
console.log(getWinnersByYear(getWinners(fifaData), getYears(fifaData)));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
  var goals = [];
  var x = 0;
  var avg = 0;
  for (var obj of data) {
    goals[x] = obj["Home Team Goals"];
    x++;
    goals[x++] = obj["Away Team Goals"];
  }
  const total = goals.reduce((acc, c) => acc + c, 0);
  avg = total / goals.length;
  avg = Math.round(avg * 10) / 10;
  return avg;
}
console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
