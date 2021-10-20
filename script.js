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