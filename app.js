<<<<<<< HEAD
const sixLetterWords = ["doctor", "mother", "school", "friday", "eraser", "desert", "potato", "always", "father", 
"chorus", "hungry", "monday", "monkey", "castle", "rabbit", "sister", "active", "spider", "coffee", "dishes", 
"shrine", "turtle", "omelet", "yellow", "cloudy", "cherry", "skiing", "sweden", "shrimp", "orange", "listen", 
"crayon", "salmon", "square", "tennis", "circle", "singer", "guitar", "police", "soccer", "cheese", "pencil", 
"flight", "artist", "player", "island", "subway", "strong", "tshirt", "gloves", "temple", "street", "tomato", 
"turkey", "bitter", "sunday", "carrot", "sleepy", "farmer", "norway", "violin", "hiking", "bridge", "basket", 
"driver", "flower", "banana", "spring", "pepper", "figure", "skater", "grapes", "winter", "french", "brazil", 
"france", "marker", "hotdog", "window", "purple", "forest", "gentle", "dinner", "famous", "racket", "travel", 
"canada", "museum"]

const sixLetterWordsObj = {"doctor": "./images/jobs/img5.png", "mother": "./images/family/img3.png", 
"school": "./images/buildings/img2.png", "friday": "./images/days/img6.png", "eraser": "./images/stationary/img7.png", 
"desert": "./images/nature/img1.png", "potato": "./images/fruitsvegetables/img23.png", "always": "./images/frequency/img1.png", 
"father": "./images/family/img4.png", "chorus": "./images/clubactivities/img18.png", "hungry": "./images/feelings/img9.png", 
"monday": "./images/days/img2.png", "monkey": "./images/animals/img8.png", "castle": "./images/buildings/img21.png", 
"rabbit": "./images/animals/img19.png", "sister": "./images/family/img7.png", "active": "./images/personalities/img1.png", 
"spider": "./images/bugs/img4.png", "coffee": "./images/drinks/img1.png", "dishes": "./images/dailyactivities/img14.png", 
"shrine": "./images/buildings/img22.png", "turtle": "./images/seaanimals/img4.png", "omelet": "./images/foods/img15.png", 
"yellow": "./images/colours/img10.png", "cloudy": "./images/weather/img2.png", "cherry": "./images/fruitsvegetables/img7.png", 
"skiing": "./images/sports/img13.png", "sweden": "./images/countries/img22.png", "shrimp": "./images/seaanimals/img8.png", 
"orange": "./images/colours/img5.png", "listen": "./images/actions1/img21.png", "crayon": "./images/stationary/img1.png", 
"salmon": "./images/ingredients/img9.png", "square": "./images/shapes/img6.png", "tennis": "./images/sports/img7.png", 
"circle": "./images/shapes/img1.png", "singer": "./images/jobs/img3.png", "guitar": "./images/instruments/img5.png", 
"police": "./images/jobs/img14.png", "soccer": "./images/sports/img6.png", "cheese": "./images/ingredients/img6.png", 
"pencil": "./images/stationary/img4.png", "flight": "./images/jobs/img17.png", "artist": "./images/jobs/img1.png", 
"player": "./images/jobs/img23.png", "island": "./images/nature/img3.png", "subway": "./images/vehicles/img6.png", 
"strong": "./images/personalities/img7.png", "tshirt": "./images/clothes/img1.png", "gloves": "./images/clothes/img9.png", 
"temple": "./images/buildings/img23.png", "street": "./images/buildings/img29.png", "tomato": "./images/fruitsvegetables/img26.png", 
"turkey": "./images/countries/img24.png", "bitter": "./images/tastes/img1.png", "sunday": "./images/days/img1.png", 
"carrot": "./images/fruitsvegetables/img6.png", "sleepy": "./images/feelings/img7.png", "farmer": "./images/jobs/img13.png", 
"norway": "./images/countries/img17.png", "violin": "./images/instruments/img6.png", "hiking": "./images/activities/img3.png", 
"bridge": "./images/buildings/img28.png", "basket": "./images/commonitems/img6.png", "driver": "./images/jobs/img18.png", 
"flower": "./images/nature/img11.png", "banana": "./images/fruitsvegetables/img2.png", "spring": "./images/seasons/img1.png", 
"pepper": "./images/fruitsvegetables/img12.png", "figure": "./images/jobs/img25.png", "skater": "./images/jobs/img25.png", 
"grapes": "./images/fruitsvegetables/img11.png", "winter": "./images/seasons/img4.png", "french": "./images/foods/img11.png", 
"brazil": "./images/countries/img3.png", "france": "./images/countries/img7.png", "marker": "./images/stationary/img2.png", 
"hotdog": "./images/foods/img10.png", "window": "./images/commonitems/img28.png", "purple": "./images/colours/img7.png", 
"forest": "./images/nature/img2.png", "gentle": "./images/personalities/img5.png", "dinner": "./images/meals/img3.png", 
"famous": "./images/descriptions/img12.png", "racket": "./images/commonitems/img3.png", "travel": "./images/actions1/img17.png", 
"canada": "./images/countries/img4.png", "museum": "./images/buildings/img6.png"}
=======
const fiveLetterWords = ["sweet", "india", "music", "korea", "never", "under", "rainy", "watch", "cards", "nurse", "kenya", "zebra", "house", "horse",
 "ghana", "whale", "koala", "shirt", "squid", "egypt", "write", "fruit", "spicy", "paper", "chair", "funny", "curry", "mouth", "shark", "cross", "italy", 
 "teach", "river", "socks", "salad", "juice", "block", "dance", "think", "black", "salty", "ruler", "drill", "spain", "enjoy", "lunch", "mouse", "white", 
 "pants", "onion", "tired", "clock", "drink", "skate", "clean", "small", "store", "tiger", "teeth", "steak", "table", "brown", "train", "truck", "heart", 
 "great", "happy", "china", "moral", "japan", "pilot", "speak", "sunny", "brush", "bread", "panda", "baker", "piano", "green", "pizza", "sheep", "brass", 
 "bacon", "snake", "study", "polar", "comic", "right", "short", "water", "melon", "peach", "brave", "snowy", "night", "camel", "track", "field", "apple", 
 "lemon", "eagle"]

>>>>>>> parent of a92f77d (Feature Complete)

let word = ""
let randomSelectSix = "" 
let answerCount = 0
let round = 0
let correctGuess = 0
let gameActive = true
let inputArr = []
let answerArr = []
<<<<<<< HEAD
const dictionary = document.querySelector(".dictionary")
function buildDictionary() {
    sixLetterWords.forEach( (x) => {
        dictionary.innerHTML += `<div class="dictionary-image">${x} <img src="${sixLetterWordsObj[x]}"></div>`
    })
=======
>>>>>>> parent of a92f77d (Feature Complete)

start()



console.log(answerArr)


function start() {
<<<<<<< HEAD
    randomSelectSix = Math.floor( Math.random()*104 )
    word = sixLetterWords[randomSelectSix]
=======
    randomSelectFive = Math.floor( Math.random()*101 )
    word = fiveLetterWords[randomSelectFive]
>>>>>>> parent of a92f77d (Feature Complete)
    answerArr = word.split("")
    answerCount = 0
    round = 0
    correctGuess = 0
    gameActive = true
    inputArr = []
    let allInputs = document.querySelectorAll(".answer-box")
    allInputs.forEach( (x) => {
        x.textContent = ""
        if (x.style.backgroundColor !== "rgb(243, 243, 231)")
        x.style.backgroundColor = "rgb(243, 243, 231)"
    })
    let allKeys = document.querySelectorAll(".key")
    allKeys.forEach( (x) => {
        if (x.style.backgroundColor !== "rgb(243, 243, 231)")
        x.style.backgroundColor = "rgb(243, 243, 231)"
    })
}

const delBtn = document.getElementById("delete")
const enterBtn = document.getElementById("enter")
const keyboardDiv = document.querySelector(".keyboard")
const messageBox = document.getElementById("message-box")
const endMessage = document.getElementById("end-message")
const resetBtn = document.getElementById("reset-btn")
const endBox = document.querySelector(".reset-box")

const answerBoxContainer = document.querySelector(".answer-box-container")

let answerInput = document.querySelector(".answer-active")

let answerBox0 = answerInput.children[0]
let answerBox1 = answerInput.children[1]
let answerBox2 = answerInput.children[2]
let answerBox3 = answerInput.children[3]
let answerBox4 = answerInput.children[4]
let answerBox5 = answerInput.children[5]

const qKey = keyboardDiv.children[0]
const wKey = keyboardDiv.children[1]
const eKey = keyboardDiv.children[2]
const rKey = keyboardDiv.children[3]
const tKey = keyboardDiv.children[4]
const yKey = keyboardDiv.children[5]
const uKey = keyboardDiv.children[6]
const iKey = keyboardDiv.children[7]
const oKey = keyboardDiv.children[8]
const pKey = keyboardDiv.children[9]
const aKey = keyboardDiv.children[10]
const sKey = keyboardDiv.children[11]
const dKey = keyboardDiv.children[12]
const fKey = keyboardDiv.children[13]
const gKey = keyboardDiv.children[14]
const hKey = keyboardDiv.children[15]
const jKey = keyboardDiv.children[16]
const kKey = keyboardDiv.children[17]
const lKey = keyboardDiv.children[18]
const zKey = keyboardDiv.children[21]
const xKey = keyboardDiv.children[22]
const cKey = keyboardDiv.children[23]
const vKey = keyboardDiv.children[24]
const bKey = keyboardDiv.children[25]
const nKey = keyboardDiv.children[26]
const mKey = keyboardDiv.children[27]

qKey.addEventListener("click",function() {
    press("q")
})
wKey.addEventListener("click",function() {
    press("w")
})
eKey.addEventListener("click",function() {
    press("e")
})
rKey.addEventListener("click",function() {
    press("r")
})
tKey.addEventListener("click",function() {
    press("t")
})
yKey.addEventListener("click",function() {
    press("y")
})
uKey.addEventListener("click",function() {
    press("u")
})
iKey.addEventListener("click",function() {
    press("i")
})
oKey.addEventListener("click",function() {
    press("o")
})
pKey.addEventListener("click",function() {
    press("p")
})
aKey.addEventListener("click",function() {
    press("a")
})
sKey.addEventListener("click",function() {
    press("s")
})
dKey.addEventListener("click",function() {
    press("d")
})
fKey.addEventListener("click",function() {
    press("f")
})
gKey.addEventListener("click",function() {
    press("g")
})
hKey.addEventListener("click",function() {
    press("h")
})
jKey.addEventListener("click",function() {
    press("j")
})
kKey.addEventListener("click",function() {
    press("k")
})
lKey.addEventListener("click",function() {
    press("l")
})
zKey.addEventListener("click",function() {
    press("z")
})
xKey.addEventListener("click",function() {
    press("x")
})
cKey.addEventListener("click",function() {
    press("c")
})
vKey.addEventListener("click",function() {
    press("v")
})
bKey.addEventListener("click",function() {
    press("b")
})
nKey.addEventListener("click",function() {
    press("n")
})
mKey.addEventListener("click",function() {
    press("m")
})

window.addEventListener("keydown", (x) => {       
    if (x.key === "Enter") {
        checkGuess()
    } else if (x.key === "Backspace") {
        del()
    } else {
    if ( /[a-z]/.test(x.key) && x.key.length === 1) {
        press(x.key)
    }
}
})


function press(key) {
    if (answerBox0.textContent === "") { 
    answerBox0.textContent = key
    answerCount = 1
    inputArr.push(key)
    } else if (answerBox1.textContent === "") {
        answerBox1.textContent = key
        answerCount = 2
        inputArr.push(key)
    } else if (answerBox2.textContent === "") {
        answerBox2.textContent = key
        answerCount = 3
        inputArr.push(key)
    } else if (answerBox3.textContent === "") {
        answerBox3.textContent = key
        answerCount = 4
        inputArr.push(key)
    } else if (answerBox4.textContent === "") {
        answerBox4.textContent = key
        answerCount = 5
        inputArr.push(key)
    } else if (answerBox5.textContent === "") {
        answerBox5.textContent = key
        answerCount = 6
        inputArr.push(key)
    }
}

function del() {
    if (gameActive) {
    if (answerBox5.textContent !== "") { 
        answerBox5.textContent = ""
        inputArr.pop()
        answerCount = 5
        } else if (answerBox4.textContent !== "") {
            answerBox4.textContent = ""
            inputArr.pop()
            answerCount = 4
        } else if (answerBox3.textContent !== "") {
            answerBox3.textContent = ""
            inputArr.pop()
            answerCount = 3
        } else if (answerBox2.textContent !== "") {
            answerBox2.textContent = ""
            inputArr.pop()
            answerCount = 2
        } else if (answerBox1.textContent !== "") {
            answerBox1.textContent = ""
            inputArr.pop()
            answerCount = 1
        } else if (answerBox0.textContent !== "") {
            answerBox0.textContent = ""
            inputArr.pop()
            answerCount = 0
        }
    }
}

delBtn.addEventListener("click", function(){
    del()
})

enterBtn.addEventListener("click",function(){
    checkGuess()
})

resetBtn.addEventListener("click",function(){
    endBox.classList.add("hide-me")
    
    answerInput.classList.remove("answer-active")
    let currentAnswerBox = answerBoxContainer.children[0]
    currentAnswerBox.classList.add("answer-active")
    answerInput = document.querySelector(".answer-active")
    answerBox0 = answerInput.children[0]
    answerBox1 = answerInput.children[1]
    answerBox2 = answerInput.children[2]
    answerBox3 = answerInput.children[3]
    answerBox4 = answerInput.children[4]
<<<<<<< HEAD
    answerBox5 = answerInput.children[5]
    let imageBoxes = document.querySelectorAll(".answer-image")
    imageBoxes.forEach( (x) => {
        x.textContent = ""
    })
=======
>>>>>>> parent of a92f77d (Feature Complete)
    start()
})

function checkGuess() {
    let thisGuess = inputArr.join("")
    
    if (gameActive) {
    if (answerCount !== 6) {
        showMessage("Not enough letters")
    } else if ( !sixLetterWords.includes(thisGuess) ) {
        showMessage("Word not in list")
    } else {
<<<<<<< HEAD
        let currentImageBox = imageBox.children[round]
        let currentImage = sixLetterWordsObj[thisGuess]
        currentImageBox.innerHTML = `<img src=${currentImage}>`
=======
>>>>>>> parent of a92f77d (Feature Complete)
        greenCheck()
    }
}
}

function showMessage(message) {
    messageBox.textContent = message
    messageBox.classList.remove("hide-me")
    setTimeout( () => {
        messageBox.classList.add("hide-me")
    }, 3000)
}

function greenCheck() {
    for ( let i = 0; i < answerArr.length; i++ ) {
        if (answerArr[i] === inputArr[i]) {
            console.log("green" + i)
            let currentAnswer = answerInput.children[i]
            currentAnswer.style.backgroundColor ="green"

            let allKeys = document.querySelectorAll(".key")
            allKeys.forEach ( (x) => {
                if (x.textContent === inputArr[i]) {
                    x.style.backgroundColor = "green"
                }
            })
            correctGuess++
            answerArr.splice( i, 1, "*")
            inputArr.splice( i, 1, "@")
            console.log(answerArr)
            console.log(inputArr)
            }
        }   
            if ( correctGuess === 6) {
            playerWins()
        } else {    
            yellowCheck()
    } 
}

function yellowCheck() {
    for ( let i = 0; i < answerArr.length; i++ ) {
        if (answerArr.includes(inputArr[i]) && answerArr[i] !== inputArr[i]) {
        console.log("yellow" + i)
        let currentAnswer = answerInput.children[i]
            currentAnswer.style.backgroundColor ="goldenrod"

            let allKeys = document.querySelectorAll(".key")
            allKeys.forEach ( (x) => {
                if (x.textContent === inputArr[i] && x.style.backgroundColor !== "green") {
                    x.style.backgroundColor = "goldenrod"
                }
            })
        console.log(answerArr.indexOf(`${inputArr[i]}`))
        let cutIndex = answerArr.indexOf(`${inputArr[i]}`)

        inputArr.splice( i, 1, "@")
        
        answerArr.splice( cutIndex, 1, "*")
        
        console.log(answerArr)
        console.log(inputArr)
        } 
    }  for ( let i = 0; i < 6; i++ ) {
        let currentAnswer = answerInput.children[i]
        let allKeys = document.querySelectorAll(".key")
        if (currentAnswer.style.backgroundColor !== "green" && currentAnswer.style.backgroundColor !== "goldenrod") {
            currentAnswer.style.backgroundColor = "grey"
            console.log(currentAnswer.textContent)
            allKeys.forEach ( (x) => {
                if (x.textContent === currentAnswer.textContent && x.style.backgroundColor !== "green" && x.style.backgroundColor !== "goldenrod") {
                    x.style.backgroundColor = "grey"
                }
            })
        }
    }   if ( round < 5) {
        resetRound()
    }  else if ( round === 5 && correctGuess < 6) {
        gameOver()
    }
}

function playerWins() {
    console.log("player wins")
    gameActive = false
    endMessage.textContent = "You Win!"
<<<<<<< HEAD
    let correctImage = sixLetterWordsObj[word]
    endImage.innerHTML = `It was "${word}" <img src=${correctImage}>`
    upperBox.classList.add("go-transparent")
    lowerBox.classList.add("go-transparent")
    setTimeout( () => {
        endBox.classList.remove("hide-me")
    }, 1000)
=======
    endBox.classList.remove("hide-me")

>>>>>>> parent of a92f77d (Feature Complete)
}

function gameOver() {
    console.log("Game Over")
    gameActive = false
    endMessage.textContent = "You Lose!"
<<<<<<< HEAD
    let correctImage = sixLetterWordsObj[word]
    endImage.innerHTML = `It was "${word}" <img src=${correctImage}>`
    upperBox.classList.add("go-transparent")
    lowerBox.classList.add("go-transparent")
    setTimeout( () => {
        endBox.classList.remove("hide-me")
    }, 1000)
=======
    endBox.classList.remove("hide-me")
>>>>>>> parent of a92f77d (Feature Complete)
}

function resetRound() {
    answerArr = word.split("")
    let currentAnswerBox = answerBoxContainer.children[round]
    currentAnswerBox.classList.remove("answer-active")
    round++
    let nextAnswerBox = answerBoxContainer.children[round]
    nextAnswerBox.classList.add("answer-active")
    answerInput = document.querySelector(".answer-active")
    answerBox0 = answerInput.children[0]
    answerBox1 = answerInput.children[1]
    answerBox2 = answerInput.children[2]
    answerBox3 = answerInput.children[3]
    answerBox4 = answerInput.children[4]
    answerBox5 = answerInput.children[5]
    inputArr = []
    correctGuess = 0
    answerCount = 0
}

