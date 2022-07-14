//Selectors
const shoot = get("shoot");
const hp = get("playerHP");
const dmg = get("dmgShow");
const score = get("scoreShow");
const turn = get("playerTurn");
console.log(turn);
console.log(shoot);
console.log(dmg);
// Event Listeners

// Event on shoot button press
shoot.addEventListener("click", attack);

// functions
function get(element) {
  return document.getElementById(element);
}

function dmgCalculator() {
  let baseDmg = Math.floosr(Math.random() * 9);
  let randomizer = [0, 1];
  let critChance = Math.random(...randomizer);
  console.log(critChance);
}
