'use strict'

var gOpts = [
    ['This place is in Rome', 'This place is in Paris', 0],
    ['This is a plane', 'This is a car', 1],
    ['These are presidents', 'These are football players', 0]
]

var gNumQuests = 3
var gQuests

var gIsCorrect = false
var gCurrQuestIdx = 0
var gNextId = 0

function initGame() {
    gQuests = createQuests(gNumQuests)
    renderQuest()
}

function createQuests(num) {

    var questions = []
    for (var i = 0; i < num; i++) {
        var question = {
            id: gNextId++,
            opts: gOpts[i],
            correctOptIdx: gOpts[i][2]
        }
        questions.push(question)
        // console.log(questions);
    }
    return questions
}

function nextQuest() {

    var elBtnNextQuest = document.querySelector('button')
    var elMsgCorrect = document.querySelector('.msgCorrect')

    elMsgCorrect.style.display = 'none'
    elBtnNextQuest.style.display = 'none'

    gIsCorrect = false

    renderQuest()
}

function renderQuest() {
    var elGameSpace = document.querySelector('.game')
    var strHTML = ''
    for (var i = 0; i < gQuests.length; i++) {
        if (gCurrQuestIdx === i) {
            strHTML += `<img src="img/${i + 1}.jpg"><div class="answers"><div class="answer" data-opt="0" onclick="checkAnswer(this)">${gQuests[i].opts[0]}</div><div class="answer" data-opt="1" onclick="checkAnswer(this)">${gQuests[i].opts[1]}</div></div>`
        }
    }
    elGameSpace.innerHTML = strHTML
}


function checkAnswer(optIdx) {
    var elMsgCorrect = document.querySelector('.msgCorrect')
    var elBtnNextQuest = document.querySelector('button')
    var elAnswers = document.querySelector('.answers')
    var elH1 = document.querySelector('h1')
    for (var i = 0; i < gQuests.length; i++) {
        if (i === gCurrQuestIdx) {
            var correctOptIdx = gQuests[i].correctOptIdx
            console.log(correctOptIdx);

            if (+optIdx.dataset.opt === correctOptIdx) {
                elMsgCorrect.style.display = 'inline'
                elBtnNextQuest.style.display = 'inline'
                elAnswers.style.display = 'none'
                if (!gIsCorrect) {
                    gCurrQuestIdx++
                    gIsCorrect = true
                }
                if (gCurrQuestIdx === gNumQuests) {
                    printVictory()
                    elH1.style.display = 'none'
                }
            }
        }
    }
}

function printVictory() {
    var elMsgCorrect = document.querySelector('.msgCorrect')
    var elBtnNextQuest = document.querySelector('button')
    var gameSpace = document.querySelector('.game')

    elMsgCorrect.style.display = 'none'
    elBtnNextQuest.style.display = 'none'
    gameSpace.innerHTML = `<h1>CONGRATULATIONS!! YOU WON!!!</h1>`
}   
