//adds event listeners to buttons
let submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", processResults)

let resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", resetQuiz)

let resultArea = document.getElementById("result")


//process results
function processResults() {
  let personalityResult = getPersonality();
  console.log(personalityResult)

  resultArea.innerHTML = "You are " + personalityResult

  function getPersonality() {
    let foodChoice = document.querySelector('input[name="food"]:checked');
    // console.log(toppingChoice.id)
    let flowersChoice = document.querySelector('input[name="flowers"]:checked');
    // console.log(weaponChoice.id)
    let placeChoice = document.querySelector('input[name="place"]:checked');
    // console.log(colorChoice.id)
    let totalPoints = 0; // 1
    totalPoints = totalPoints + foodPoints[foodChoice.id]
    totalPoints = totalPoints + flowersPoints[flowersChoice.id]
    totalPoints = totalPoints + placePoints[placeChoice.id]
    console.log(totalPoints)

    foodChoice.checked = false;
    flowersChoice.checked = false;
    placeChoice.checked = false;

    if (totalPoints <= 1) {
      return "Eagle"
    } else if (totalPoints <= 3) {
      return "Octopus"
    } else if (totalPoints <= 5) {
      return "Dragon"
    } else if (totalPoints <=7) {
      return "Unicorn"
    }
     else{
      return "Rabbit"
     }
  }

}

//resets display on page
function resetQuiz() {
  resultArea.innerHTML = ""

}

//point system
let foodPoints = {
     Pizza: 1,
     Eggplants: 2,
     Popcorn: 3,
     "Who-eats-food-LMAO?": 0
}

let flowersPoints = {
     Roses: 4,
     Daisies: 4,
     Tulips: 4,
     "I'm-not-vegan.": 2
}

let placePoints = {
  Chitpotle: 2,
  McDonald: 1,
  "Olive-Garden": 0,
  "The-garden": 4
}
