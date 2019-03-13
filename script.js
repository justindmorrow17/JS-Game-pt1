"use strict";

let start = prompt("Would you like to play a game?");
if (start.toLowerCase() === "yes") {
    let playerName = prompt("What is your name?");
    let playerhp = 40;
    let granthp = 10;
    let wins = 0;
    // console.log(`${playerName}`) Test 
    console.log(`Let's get ready to rumble! ${playerName}'s starting health is ${playerhp} and Grant's starting health is ${granthp}`);

    while (start) {
        console.log(`${playerName}'s Health: ${playerhp -= Math.floor((Math.random()* 2) + 1)}`);
        console.log(`Grant's Health: ${granthp -= Math.floor((Math.random()* 2) + 1)}`);

        if (playerhp <= 0) {
            console.log(`You have been found wanting. Game Over - Grant Won!`);
            break;

        } else if (granthp <= 0) {
            wins++;
            console.log(`${playerName} wins! You need to win ${3-wins} more round(s). `);
            granthp = 10;

        } 
        if (wins === 3) {
            console.log(`We have a new Champion, you won the game.`);
            break;
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