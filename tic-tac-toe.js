document.write("<h1>Lets play tic tac toe</h1>");

let startingSearchParams = "?r1c1=-&r1c2=-&r1c3=-&r2c1=-&r2c2=-&r2c3=-&r3c1=-&r3c2=-&r3c3=-"

document.write(`<p> Click on this <a href="${startingSearchParams}">link</a> to start your game </p>`);

let params = new URLSearchParams(document.location.search);
let r1c1 = params.get("r1c1");
let r1c2 = params.get("r1c2");
let r1c3 = params.get("r1c3");
let r2c1 = params.get("r2c1");
let r2c2 = params.get("r2c2");
let r2c3 = params.get("r2c3");
let r3c1 = params.get("r3c1");
let r3c2 = params.get("r3c2");
let r3c3 = params.get("r3c3");

let board = [
    r1c1, r1c2, r1c3,
    r2c1, r2c2, r2c3,
    r3c1, r3c2, r3c3,
]

document.write(r1c1 + r1c2 + r1c3);
document.write("<br>");
document.write(r2c1 + r2c2 + r2c3);
document.write("<br>");
document.write(r3c1 + r3c2 + r3c3);
document.write("<br>");


if(board[0] === "X" && board[1] === "X" && board[2] === "X") {
    document.write("X wins!")
} else if(board[0] === "Y" && board[1] === "Y" && board[2] === "Y") {
    document.write("Y wins!")
}
// TODO: finish the conditions under which each side could win.
