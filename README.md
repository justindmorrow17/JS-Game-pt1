# JS-Game-pt1
Loop based JS game

Task: Prompt the user if they would like to play the game with two characters - the user and
the Almighty Grant. If yes, prompt the user to name their character. Run a while loop that will
iterate until either the character has beat Grant three times or the character has been
defeated.
What does the application do?
1. The user is prompted to play a game. If the user chooses yes, the user is prompted to
enter his or her name, and the battle begins. Otherwise, nothing else happens.
2. The game will use a while loop to simulate a turn-based fight between the user and
Grant.
3. The user starts with 40 “health points.” Grant starts with 10 “health points.”
4. Each iteration of the while loop will remove random numbers of health points (either 1
or 2) from both the user and Grant.
5. Each time Grant’s health points hit 0, he is “defeated” and the user gains 1 “win.” But
Grant’s health points are reset to 10. Note: the user’s health points never reset.
6. The game ends when either a) Grant has been defeated three times (i.e.,, the user has
three wins) or b) the user has been defeated (hit 0 health points).
7. When the game is over, the application logs the winner.
