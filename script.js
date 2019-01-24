"use strict";

let start = prompt("Would you like to play a game?");
if (start === "yes") {
    let playerName = prompt("What is your name?");
    let playerhp = 40;
    let granthp = 10;
    let wins = 0;
    // console.log(`${playerName}`) Test 
    console.log(`Let's get ready to rumble! ${playerName}'s starting health is ${playerhp} and Grant's starting health is ${granthp}`);

    while (granthp > 0) {
        console.log(`${playerName}'s Health: ${playerhp -= Math.floor((Math.random()* 12) + 1)}`);
        console.log(`Grant's Health: ${granthp -= Math.floor((Math.random()* 2) + 1)}`);

        if (wins === 2 && granthp <= 0) {
            console.log(`We have a new Champion, ${playerName} wins!`);
            break;

        } else if (playerhp <= 0) {
            console.log(`You have been found wanting. Game Over - Grant Won!`);
            break;

        } else if (granthp <= 0) {
            wins++;
            granthp = 10;
            console.log(`${playerName} wins!, you now have ${wins} wins.`);
        }
    }

} else {
    console.log("Try again tomorrow?");
}


// let wins = 0;
// let pHp = 40;
// let GrantHp = 10;


// **Player health decreases**
// for (let php = 40; php <= 40; php--) {
//     if (php > 0 ) {
//         console.log(`Justin has ${php} left.`);
//     } else {
//         console.log('Player has no health left');
//         break;
//     }
// }


// // **Grant health decreases**
// for (let Granthp = 10; Granthp <= 10; Granthp--) {
//     if (Granthp > 0 ) {
//         console.log(`Grant has ${Granthp} left.`);
//     } else {
//         console.log('Grant has no health left');
//         break;
//     }
// }