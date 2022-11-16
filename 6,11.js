// if (confirm("Are you 16")) {
//     alert("You very old");
// } else {
//     alert("You kid");
// }
// function e (num1){
//  let y = num1 * 0.7 - 200 ;
//  if (y > 15000) {
//   alert("Ура вашша зарплата" + " " + y);
//  } else  {
//   alert("На жаль ваш зарплата" + " " + y);
//  }
// };
// e (prompt("Введіть свою зарплату"));
function x () {
    let i =  prompt("Введіть перше число")
    let y =  prompt("Ввведіть друге число")
    let f = [i, y]
    if (f[0] > f[1]) {
        alert(f[0] + " " + "больше" + " " + f[1]);
    } else  {
        alert(f[0] + " " + "менше" + " " + f[1]);
    } if (f[1] > f[0]) {
        alert(f[1] + " " + "больше" + " " + f[0]);
    } else  {
        alert(f[1] + " " + "менше" + " " + f[0]);
    }
}
x ();