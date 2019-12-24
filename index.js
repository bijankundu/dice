var diceValue1,diceValue2;
var myVar = sessionStorage.getItem(".k") || 'defaultValue';
if(myVar == 'defaultValue')
{
      document.querySelector(".container h1").textContent = "Refresh Me";
      sessionStorage.setItem(".k", "1");
}
else
{
  diceValue1 = Math.floor(Math.random() * 6) + 1;
  diceValue2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".dice .img1").setAttribute("src",'images/dice' + diceValue1 + '.png');
  document.querySelector(".dice .img2").setAttribute("src",'images/dice' + diceValue2 + '.png');
  if(diceValue1 > diceValue2)
      document.querySelector(".container h1").textContent = "🚩 Play 1 Wins!";
  else if(diceValue1 < diceValue2)
      document.querySelector(".container h1").textContent = "Player 2 Wins! 🚩";
  else
      document.querySelector(".container h1").textContent = "Its a Draw";
}
