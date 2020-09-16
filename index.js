import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 


(a) Home Team name for 2014 world cup final */
console.log("Task 1: (complete)")

function get2014Finals(data) {
    return data.filter(function(item) {
        return item.Year == 2014 && item.Stage == "Final";
    });
}; //reusable for each sub-task for task 1

const homeFinal14 = get2014Finals(fifaData);
console.log(homeFinal14[0]["Home Team Name"]);

/*
(b) Away Team name for 2014 world cup final*/

const awayFinal14 = get2014Finals(fifaData);
console.log(awayFinal14[0]["Away Team Name"]);

/*
(c) Home Team goals for 2014 world cup final*/

const homeGoals14 = get2014Finals(fifaData);
console.log(homeGoals14[0]["Home Team Goals"]);

/*
(d) Away Team goals for 2014 world cup final*/

const awayGoals14 = get2014Finals(fifaData);
console.log(awayGoals14[0]["Away Team Goals"]);

/*
(e) Winner of 2014 world cup final */

const winner14 = get2014Finals(fifaData);


if (winner14[0]["Home Team Goals"] > winner14[0]["Away Team Goals"]) {
    console.log(winner14[0]["Home Team Name"]);
}
else if (winner14[0]["Home Team Goals"] < winner14[0]["Away Team Goals"]) {
    console.log(winner14[0]["Away Team Name"]);
}
else if (winner14[0]["Home Team Goals"] == winner14[0]["Away Team Goals"]) {
    console.log(winner14[0]["It was a tie!"]);
}
else {
    console.log("Something went wrong!");
}
console.log(`More detail: ${winner14[0]["Win conditions"]}`);



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

console.log("Task 2: (complete)")

function getFinals(data) {
    return data.filter(function(item) {
        return item.Stage == "Final";
    });
};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

console.log("Task 3: (complete)")

function getYears(callback) {

    return callback.map(function(item) {
        return item.Year;
    });
};

console.log(getYears(getFinals(fifaData))); // This totally works except the 1950 games because there were no finals that year


/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

console.log("Task 4: (complete)")

function getWinners(callback) {
    let winners = [];
    callback.map(function(item) {
        if (item["Home Team Goals"] > item["Away Team Goals"]) {
            winners.push(item["Home Team Name"]);
        }
        else if (item["Home Team Goals"] < item["Away Team Goals"]) {
            winners.push(item["Away Team Name"]);
        }
        else if (item["Home Team Goals"] == item["Away Team Goals"]) {
            winners.push("It was a tie!");
        }
        else {
            winners.push("Something went wrong!");
        }
    });
    return winners;
}


console.log(getWinners(getFinals(fifaData))); 


/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners - outputs array of country names
 * callback function getYears - outputs an array of years
 */

console.log("Task 5: (complete)");

function getWinnersByYear(callbackWinners, callbackYears) {
    let yearInfo = callbackYears(getFinals(fifaData));
    let winnerInfo = callbackWinners(getFinals(fifaData));

    let winnerStringInfo = [];

    winnerInfo.map(function(item, index){
        winnerStringInfo.push(`In ${yearInfo[index]}, ${item} won the world cup!`);
    });
    return winnerStringInfo;
};

getWinnersByYear(getWinners, getYears);
console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

console.log("Task 6:")

function getAverageGoals(data) {
    let homeList = [];
    let awayList = [];
    data.forEach(function(item){
        homeList.push(item["Home Team Goals"]);
        awayList.push(item["Away Team Goals"]);
    });
    let homeSum = homeList.reduce(function(accumulator, item) {
        return accumulator + item;
    });
    let awaySum = awayList.reduce(function(accumulator, item) {
        return accumulator + item;
    });
    let homeAvg = homeSum/homeList.length;
    let awayAvg = awaySum/awayList.length;
    return `Average home goals: ${homeAvg}, Average away goals: ${awayAvg}`
};

getAverageGoals(fifaData);
console.log(getAverageGoals(fifaData));



/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
