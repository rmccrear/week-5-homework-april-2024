let params = new URLSearchParams(document.location.search);

let player1 = params.get("p1");
let player2 = params.get("p2");

if(player1 === "rock" && player2 === "paper") {
  document.write("player 2 wins!")
}
// TODO: write all the conditions to indicate who will win the game.



<input type="password" name="p1" />

// Bonus: add a form to allow for player to enter their guesses. Hint: Try <input type="password" name=p1 /> in a form in the html

// Bonus: allow players to enter their names.

// Extra bonus: try and make the names persist so the players don't need to enter their names each play