// 1. Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.



const gameInfo = [
    // ... (gameInfo data)
  ];
  
  const usernames = gameInfo.map(player => player.username + '!');
  console.log(usernames); // ["john!", "becky!", "susy!", "tyson!"]
  
// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.

  const winners = gameInfo.filter(player => player.score > 5)
  .map(player => player.username);
console.log(winners); // ["becky", "susy"]


// 3. Find and display the total score of the users. (Hint: The total score is 71)
const totalScore = gameInfo.reduce((acc, player) => acc + player.score, 0);
console.log(totalScore); // 71
