//Theres an algorithms tournament taking place in which teams will compete against each other to solve algorithms as fast as possible. You are given two arrays. The first is a 2d array, competitions, of pairs representing the teams that have competed against each other in the format of [homeTeam, awayTeam]. The second array, results, contains the results of each competition, where 0 means the away team won and 1 means the home team won. Write a function that takes in the two arrays and returns the winner of the tournament.  

const tournamentWinner = (competitions, results) => { //takes in 2d array 'competitions', and array 'results'
    let winsMap = {}; //keep track of each team's wins
    let currentFirstPlace = {teamName: "", score: 0}; //keep track of current first place

    for(let i = 0; i < competitions.length; i++){ //iterate through competitions array
        let homeTeam = competitions[i][0]; //declaring homeTeam
        let awayTeam = competitions[i][1]; //declaring awayTeam

        if(results[i] === 1){ //if homeTeam wins
            winsMap[homeTeam] = (winsMap[homeTeam] || 0 ) + 1; //either add to hashmap or add 1 to score
        } else { //if awayTeam wins
            winsMap[awayTeam] = (winsMap[awayTeam] || 0 ) + 1; //either add to hashmap or add 1 to score
        }

        if(winsMap[homeTeam] > currentFirstPlace.score){ //if homeTeam takes the lead
            currentFirstPlace = { //change current leader
                teamName: homeTeam, //change lead team name to homeTeam name
                score: winsMap[homeTeam] //change lead score to homeTeam score
            } 
        } else if (winsMap[awayTeam] > currentFirstPlace){ //if awayTeam takes the lead
            currentFirstPlace = { //change current leader
                teamName: awayTeam, //change lead team name to awayTeam name
                score: winsMap[awayTeam] //change lead score to awayTeam score
            } 
        }
    }

    return currentFirstPlace.teamName; //return final leader
}


let competitions = [["HTML", "C#"], ['C#', "Python"], ["Python", "HTML"]];
let results = [ 0, 0, 1] //Python

let competitions1 = [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"]]
let results1 = [0, 1, 1] //Java

let competitions2 = [
    ["AlgoMasters", "FrontPage Freebirds"],
    ["Runtime Terror", "Static Startup"],
    ["WeC#", "Hypertext Assassins"],
    ["AlgoMasters", "WeC#"],
    ["Static Startup", "Hypertext Assassins"],
    ["Runtime Terror", "FrontPage Freebirds"],
    ["AlgoMasters", "Runtime Terror"],
    ["Hypertext Assassins", "FrontPage Freebirds"],
    ["Static Startup", "WeC#"],
    ["AlgoMasters", "Static Startup"],
    ["FrontPage Freebirds", "WeC#"],
    ["Hypertext Assassins", "Runtime Terror"],
    ["AlgoMasters", "Hypertext Assassins"],
    ["WeC#", "Runtime Terror"],
    ["FrontPage Freebirds", "Static Startup"]]
let results2 = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0] //AlgoMasters



console.log(tournamentWinner(competitions, results))
console.log(tournamentWinner(competitions1, results1))
console.log(tournamentWinner(competitions2, results2))