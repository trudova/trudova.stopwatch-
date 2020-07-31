//start game
// put the ships randomly 
//sturt battele
// asking guess of position , compere gues to position
// game is over , evaluation of the result;

 // looping program while ship is up
 //get a coordinates from user
 //comper coopdinats to set of posible values, if data uncorect - error message
 //eles + 1 to the guess
 // if shot is got the ship + 1 to rigthr shot;
 // if right shots equals all ships downe isSunk =true
 //log Ship is sunk
 // log the statistics to the user.


//  let location1 = Math.floor(Math.random()*5);
//  let location2 = location1 + 1;
//  let location3 = location2 + 1;
//  let guess;// so fur undefined 
//  let hits = 0;
//  let guesses = 0;

//  let isSunk=false;
//  while(isSunk==false){
//      guess = prompt("are you ready to shot? put the number from 0 to 6");
//      if(guess < 0|| guess > 6){
//          alert("damn, i said 0 to 6");
//      }else{
//          guesses ++;
//          if((guess == location1) || (guess == location2) || (guess == location3)){
//              hits++;
//              if(hits == 3){
//                  isSunk=true;
//                  alert("this is a Victory Man");
//              }
//          }else{
//              alert("hahaha you missed %-)))");
//          }
//      }
//  }
//  let status = "you shoot " + guesses + "yor level in game: "+ (3/guesses);
// alert(status);
function init() {
    let par = document.getElementById("code1");/// geting data
par.innerHTML = " it was paragrath ";
console.log(par.innerHTML);

let myClass = document.getElementsByClassName("some");
console.log(myClass);
par.setAttribute("class", "redtext");
let scope = document.getElementById("code2");
let altText =scope.getAttribute("alt")
console.log(altText)
}
window.onload = init;