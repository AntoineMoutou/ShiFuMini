'use strict';

class ShiFuMi {

  constructor(text) {
    // text = "shi" || "fu" || "mi"
    if (text==undefined) {
      text = randomShiFuMi();
    }
    this.choice = text;
  }

  fight(otherShiFuMi){
    if (this.choice == otherShiFuMi.choice) {
      return "Equality";
    }
    else if (this.choice == "shi" && otherShiFuMi.choice == "fu") {
      return "You lose";
    }
    else if (this.choice == "fu" && otherShiFuMi.choice == "mi") {
      return "You lose";
    }
    else if (this.choice == "mi" && otherShiFuMi.choice == "shi") {
      return "You lose";
    }
    else {
      return "You win";
    }
  }

}

function randomShiFuMi() {
  var rTmp = Math.random();

  if (rTmp <= 0.33) {
    return "shi";
  }
  else if (rTmp <= 0.66) {
    return "fu"
  }
  else {
    return "mi"
  }
}

module.exports = {
  ShiFuMi : ShiFuMi,
  fight : ShiFuMi.fight,
  choice : ShiFuMi.choice,
  randomShiFuMi : randomShiFuMi

}
