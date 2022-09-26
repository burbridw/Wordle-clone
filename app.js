const fiveLetterWords = ["sweet", "india", "music", "korea", "never", "under", "rainy", "watch", "cards", "nurse", "kenya", "zebra", "house", "horse",
 "ghana", "whale", "koala", "shirt", "squid", "egypt", "write", "fruit", "spicy", "paper", "chair", "funny", "curry", "mouth", "shark", "cross", "italy", 
 "teach", "river", "socks", "salad", "juice", "block", "dance", "think", "black", "salty", "ruler", "drill", "spain", "enjoy", "lunch", "mouse", "white", 
 "pants", "onion", "tired", "clock", "drink", "skate", "clean", "small", "store", "tiger", "teeth", "steak", "table", "brown", "train", "truck", "heart", 
 "great", "happy", "china", "moral", "japan", "pilot", "speak", "sunny", "brush", "bread", "panda", "baker", "piano", "green", "pizza", "sheep", "brass", 
 "bacon", "snake", "study", "polar", "comic", "right", "short", "water", "melon", "peach", "brave", "snowy", "night", "camel", "track", "field", "apple", 
 "lemon", "eagle", "cream", "drama", "snack"]

const fiveLetterWordsObj = {
    "sweet": "./images/tastes/img2.png", "india": "./images/countries/img10.png", "music": "./images/subjects/img7.png", "korea": "./images/countries/img14.png", 
    "never": "./images/frequency/img4.png", "under": "./images/locations/img4.png", "rainy": "./images/weather/img3.png", "watch": "./images/commonitems/img9.png", 
    "cards": "./images/activities/img10.png", "nurse": "./images/jobs/img6.png", "kenya": "./images/countries/img13.png", "zebra": "./images/animals/img6.png", 
    "house": "./images/buildings/img1.png", "horse": "./images/animals/img9.png", "ghana": "./images/countries/img9.png", "whale": "./images/seaanimals/img1.png", 
    "koala": "./images/animals/img15.png", "shirt": "./images/clothes/img2.png", "squid": "./images/seaanimals/img6.png", "egypt": "./images/countries/img6.png", 
    "write": "./images/actions1/img23.png", "fruit": "./images/fruitsvegetables/img1.png", "spicy": "./images/tastes/img5.png", "paper": "./images/activities/img11.png", 
    "chair": "./images/commonitems/img22.png", "funny": "./images/personalities/img4.png", "curry": "./images/foods/img3.png", "mouth": "./images/body/img10.png", 
    "shark": "./images/seaanimals/img2.png", "cross": "./images/shapes/img2.png", "italy": "./images/countries/img11.png", "teach": "./images/actions1/img19.png", 
    "river": "./images/nature/img7.png", "socks": "./images/clothes/img10.png", "salad": "./images/foods/img18.png", "juice": "./images/drinks/img4.png", 
    "block": "./images/directions/img6.png", "dance": "./images/actions1/img4.png", "think": "./images/actions2/img15.png", "black": "./images/colours/img1.png", 
    "salty": "./images/tastes/img3.png", "ruler": "./images/stationary/img8.png", "drill": "./images/schoolevents/img10.png", "spain": "./images/countries/img21.png", 
    "enjoy": "./images/actions2/img8.png", "lunch": "./images/meals/img2.png", "mouse": "./images/animals/img20.png", "white": "./images/colours/img9.png", 
    "pants": "./images/clothes/img6.png", "onion": "./images/fruitsvegetables/img19.png", "tired": "./images/feelings/img6.png", "clock": "./images/commonitems/img10.png", 
    "drink": "./images/actions1/img11.png", "skate": "./images/actions1/img6.png", "clean": "./images/actions1/img14.png", "small": "./images/conditions/img2.png", 
    "store": "./images/buildings/img16.png", "tiger": "./images/animals/img4.png", "teeth": "./images/body/img9.png", "steak": "./images/foods/img14.png", 
    "table": "./images/commonitems/img24.png", "brown": "./images/colours/img3.png", "train": "./images/vehicles/img5.png", "truck": "./images/vehicles/img4.png", 
    "heart": "./images/shapes/img4.png", "great": "./images/feelings/img3.png", "happy": "./images/feelings/img4.png", "china": "./images/countries/img5.png", 
    "moral": "./images/subjects/img11.png", "japan": "./images/countries/img12.png", "pilot": "./images/jobs/img16.png", "speak": "./images/actions1/img20.png", 
    "sunny": "./images/weather/img1.png", "brush": "./images/dailyactivities/img2.png", "bread": "./images/foods/img5.png", "panda": "./images/animals/img14.png", 
    "baker": "./images/jobs/img11.png", "piano": "./images/instruments/img4.png", "green": "./images/colours/img4.png", "pizza": "./images/foods/img8.png", 
    "sheep": "./images/animals/img12.png", "brass": "./images/clubactivities/img17.png", "bacon": "./images/ingredients/img4.png", "snake": "./images/animals/img21.png", 
    "study": "./images/actions1/img25.png", "polar": "./images/animals/img2.png", "comic": "./images/commonitems/img13.png", "right": "./images/directions/img4.png", 
    "short": "./images/conditions/img4.png", "water": "./images/drinks/img7.png", "melon": "./images/fruitsvegetables/img16.png", "peach": "./images/fruitsvegetables/img21.png", 
    "brave": "./images/personalities/img2.png", "snowy": "./images/weather/img4.png", "night": "./images/timesofday/img4.png", "camel": "./images/animals/img10.png", 
    "track": "./images/sports/img10.png", "field": "./images/sports/img10.png", "apple": "./images/fruitsvegetables/img1.png", "lemon": "./images/fruitsvegetables/img14.png", 
    "eagle": "./images/animals/img24.png", "cream": "./images/desserts/img4.png", "drama": "./images/schoolevents/img4.png", "snack": "./images/desserts/img8.png"
}

let word = ""
let randomSelectFive = "" 
let answerCount = 0
let round = 0
let correctGuess = 0
let gameActive = true
let inputArr = []
let answerArr = []
const dictionary = document.querySelector(".dictionary")
function buildDictionary() {
    fiveLetterWords.forEach( (x) => {
        dictionary.innerHTML += `<div class="dictionary-image">${x} <img src="${fiveLetterWordsObj[x]}"></div>`
    })
}
buildDictionary()
start()



function start() {
    randomSelectFive = Math.floor( Math.random()*101 )
    word = fiveLetterWords[randomSelectFive]
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
const endImage = document.getElementById("end-image")
const resetBtn = document.getElementById("reset-btn")
const endBox = document.querySelector(".reset-box")
const upperBox = document.querySelector(".upper-container")
const lowerBox = document.querySelector(".lower-container")
const imageBox = document.querySelector(".answer-image-container")
const dictionaryBtn = document.getElementById("dictionary-button")
const closeDictionaryBtn = document.getElementById("close-dictionary")
const answerBoxContainer = document.querySelector(".answer-box-container")

let answerInput = document.querySelector(".answer-active")
let answerBox0 = answerInput.children[0]
let answerBox1 = answerInput.children[1]
let answerBox2 = answerInput.children[2]
let answerBox3 = answerInput.children[3]
let answerBox4 = answerInput.children[4]

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
    if (gameActive) {
    if (x.key === "Enter") {
        checkGuess()
    } else if (x.key === "Backspace") {
        del()
    } else {
    if ( /[a-z]/.test(x.key) && x.key.length === 1) {
        press(x.key)
    }
    }
    } else {
    if (x.key === "Enter") {
        resetGame()
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
    }
}

function del() {
    if (gameActive) {
    if (answerBox4.textContent !== "") { 
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
    resetGame()
})

dictionaryBtn.addEventListener("click",function(){
    dictionary.classList.remove("dictionary-close")
})

closeDictionaryBtn.addEventListener("click",function() {
    dictionary.classList.add("dictionary-close")
})

function resetGame() {
    endBox.classList.add("hide-me")
    upperBox.classList.remove("go-transparent")
    lowerBox.classList.remove("go-transparent")
    answerInput.classList.remove("answer-active")
    let currentAnswerBox = answerBoxContainer.children[0]
    currentAnswerBox.classList.add("answer-active")
    answerInput = document.querySelector(".answer-active")
    answerBox0 = answerInput.children[0]
    answerBox1 = answerInput.children[1]
    answerBox2 = answerInput.children[2]
    answerBox3 = answerInput.children[3]
    answerBox4 = answerInput.children[4]
    let imageBoxes = document.querySelectorAll(".answer-image")
    imageBoxes.forEach( (x) => {
        x.textContent = ""
    })
    start()
}

function checkGuess() {
    let thisGuess = inputArr.join("")
    
    if (gameActive) {
    if (answerCount !== 5) {
        showMessage("Not enough letters")
    } else if ( !fiveLetterWords.includes(thisGuess) ) {
        showMessage("Word not in list")
    } else {
        let currentImageBox = imageBox.children[round]
        let currentImage = fiveLetterWordsObj[thisGuess]
        currentImageBox.innerHTML = `<img src=${currentImage}>`
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
            let currentAnswer = answerInput.children[i]
            currentAnswer.style.backgroundColor ="greenyellow"

            let allKeys = document.querySelectorAll(".key")
            allKeys.forEach ( (x) => {
                if (x.textContent === inputArr[i]) {
                    x.style.backgroundColor = "greenyellow"
                }
            })
            correctGuess++
            answerArr.splice( i, 1, "*")
            inputArr.splice( i, 1, "@")
            }
        }   
            if ( correctGuess === 5) {
            playerWins()
        } else {    
            yellowCheck()
    } 
}

function yellowCheck() {
    for ( let i = 0; i < answerArr.length; i++ ) {
        if (answerArr.includes(inputArr[i]) && answerArr[i] !== inputArr[i]) {
        let currentAnswer = answerInput.children[i]
            currentAnswer.style.backgroundColor ="yellow"

            let allKeys = document.querySelectorAll(".key")
            allKeys.forEach ( (x) => {
                if (x.textContent === inputArr[i] && x.style.backgroundColor !== "greenyellow") {
                    x.style.backgroundColor = "yellow"
                }
            })
        console.log(answerArr.indexOf(`${inputArr[i]}`))
        let cutIndex = answerArr.indexOf(`${inputArr[i]}`)

        inputArr.splice( i, 1, "@")
        
        answerArr.splice( cutIndex, 1, "*")
        
        console.log(answerArr)
        console.log(inputArr)
        } 
    }  for ( let i = 0; i < 5; i++ ) {
        let currentAnswer = answerInput.children[i]
        let allKeys = document.querySelectorAll(".key")
        if (currentAnswer.style.backgroundColor !== "greenyellow" && currentAnswer.style.backgroundColor !== "yellow") {
            currentAnswer.style.backgroundColor = "darkgray"
            console.log(currentAnswer.textContent)
            allKeys.forEach ( (x) => {
                if (x.textContent === currentAnswer.textContent && x.style.backgroundColor !== "greenyellow" && x.style.backgroundColor !== "goldenrod") {
                    x.style.backgroundColor = "darkgray"
                }
            })
        }
    }   if ( round < 5) {
        resetRound()
    }  else if ( round === 5 && correctGuess < 5) {
        gameOver()
    }
}

function playerWins() {
    gameActive = false
    endMessage.textContent = "You Win!"
    let correctImage = fiveLetterWordsObj[word]
    endImage.innerHTML = `It was "${word}" <img src=${correctImage}>`
    upperBox.classList.add("go-transparent")
    lowerBox.classList.add("go-transparent")
    setTimeout( () => {
        endBox.classList.remove("hide-me")
    }, 1000)
}

function gameOver() {
    console.log("Game Over")
    gameActive = false
    endMessage.textContent = "You Lose!"
    let correctImage = fiveLetterWordsObj[word]
    endImage.innerHTML = `It was "${word}" <img src=${correctImage}>`
    upperBox.classList.add("go-transparent")
    lowerBox.classList.add("go-transparent")
    setTimeout( () => {
        endBox.classList.remove("hide-me")
    }, 1000)
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
    inputArr = []
    correctGuess = 0
    answerCount = 0
}