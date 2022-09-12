let word = "dog"

let answer = word.split("")
console.log(answer)

let answerCount = 0
let answerArr = []

const startBtn = document.getElementById("start")
const enterBtn = document.getElementById("enter")
const keyboardDiv = document.querySelector(".keyboard")
const answerInput = document.querySelector(".answer-input")

const answerBox1 = answerInput.children[0]
const answerBox2 = answerInput.children[1]
const answerBox3 = answerInput.children[2]

const dKey = keyboardDiv.children[0]
const oKey = keyboardDiv.children[1]
const gKey = keyboardDiv.children[2]
const bKey = keyboardDiv.children[3]

dKey.addEventListener("click",function() {
    press("d")
})
oKey.addEventListener("click",function() {
    press("o")
})
gKey.addEventListener("click",function() {
    press("g")
})
bKey.addEventListener("click",function() {
    press("b")
})

function press(key) {
    if (answerBox1.textContent === "") { 
    answerBox1.textContent = key
    answerCount = 1
    } else if (answerBox2.textContent === "") {
        answerBox2.textContent = key
        answerCount = 2
    } else if (answerBox3.textContent === "") {
        answerBox3.textContent = key
        answerCount = 3
    }
    console.log(key)
}

startBtn.addEventListener("click",function() {
    start()
})

function start() {
    console.log(keyboardDiv.children[0])
}

enterBtn.addEventListener("click",function(){
    check()
})

function check() {
    if (answerCount !== 3) {
        console.log("not enough letters")
    } else {
        let modAnswer = answer
        for ( let i = 0; i < 3; i++) {
            let currentAnswer = answerInput.children[i]
            answerArr.push(currentAnswer.textContent)
        } console.log(answerArr)
        for ( let i = 0; i < answerArr.length; i++ ) {
            if ( modAnswer.includes(answerArr[i]) ) {
                let currentAnswer = answerInput.children[i]
                console.log("yes")
                if ( answerArr.indexOf(answerArr[i]) === answer.indexOf(answerArr[i]) ) {
                    currentAnswer.style.backgroundColor = "green"
                } else {
                currentAnswer.style.backgroundColor = "yellow" 
                }
                console.log(answerArr.indexOf(answerArr[i]))
                console.log(answer.indexOf(answerArr[i]))

            }
        }
    } 
}