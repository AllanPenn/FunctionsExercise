// 1
function spookyGhost(){
  console.log("Boo!!!");
};
spookyGhost();
// 2
function candy(goal){
  console.log(goal);
  console.log(goal);
  console.log(goal);
  console.log(goal);
};
// 3
candy("Get Candy");
function werewolf(a, b){
  if (a === "Full" && b === "Moon"){
    console.log("ARH-WOOO!");
  }
};
// 4
function halloween(){
  return "October 31st";
};
// 5
function isEnoughCandy(pieces){
  if(pieces >= 31){
    return true;
  } else {
    return false;
  }
};
// 6
function candyCounter(nums){
  let sum = 0;
  for (i = 0; i < nums.length; i++){
    sum += nums[i];
  }
  return sum;
};
// 7
const hauntedMansion = function(){
  console.log("Welcome, foolish mortals, to the Haunted Mansion!");
};
// 8
ghostbusters = () => "Who You Gonna Call?";
// 9: No
// 10: Yes
// 11a
const costumes = ["Ghost", "Princess", "Pirate"];
// 11b
const upperCostumes = costumes.map(i => i.toUpperCase());

// BONUS
// 12a
const stephenKingMovies = [
  "The Shining",
  "Christine",
  "It",
  "The Mist",
  "Creepshow",
  "Pet Sematary"
];
// 12b
const twoMovies = stephenKingMovies.filter(i => i.length === 9);
console.log(twoMovies);
// 13a
const halloweenSongs1 = ["Monster Mash", "Thriller"];
// 13b
const halloweenSongs2 = [
  "I Put A Spell On You",
  "This Is Halloween",
  "Ghostbusters"
];
// 13c
halloweenJukebox = (songs) => {
  const random = Math.floor(Math.random() * songs.length);
  console.log(songs[random]);
};
// 13d
halloweenJukebox(halloweenSongs1);
halloweenJukebox(halloweenSongs2);
// 14
caps = (string) => {
  for (i = 0; i < string.length; i += 2){
    string = string.substring(0, i) + string[i].toUpperCase() + string.substring(i + 1);
  }
  return string;
}