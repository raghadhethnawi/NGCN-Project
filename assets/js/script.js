const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scoreCard = document.getElementById('final-score')

let shuffledQuestions, currentQuestionIndex, questionsCorrect, questionAnswered

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => { 
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionsCorrect = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    if (currentQuestionIndex < 5) {
        resetState()
        showQuestion(shuffledQuestions[currentQuestionIndex])
    }
    else {
        endQuiz()
        scoreCard.classList.remove('hide')
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
    questionAnswered = false
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    if (questionAnswered == false && correct) {
        questionsCorrect++
        } 
    questionAnswered = true
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function endQuiz() {
     clearStatusClass
     scoreCard.innerText=('You completed the quiz. You answered ' + questionsCorrect + ' questions correctly.')
     answerButtonsElement.classList.add('hide')
     questionElement.classList.add('hide')
     nextButton.classList.add('hide')
}

const questions = [
    {
        question: 'Approximately how many people have been displaced as a result of the Yemeni Crisis?',
        answers: [
            {text: '1 million', correct: false }, 
            {text: '2 million', correct: false },
            {text: '3 million', correct: false },
            {text: '4 million', correct: true },
        ]
    },
    {
        question: 'How many people have been killed as part of the Yemeni crisis since 2015?',
        answers: [
            {text: '50,000', correct: false }, 
            {text: '100,000', correct: true },
            {text: '500,000', correct: false },
            {text: '1 million', correct: false },
        ]
    },
    {
        question: 'Who are the two sides of the conflict in Yemen?',
        answers: [
            {text: 'Yemeni government and Saudi-backed military vs. Iran-backed Houthi rebels', correct: true }, 
            {text: 'Yemeni government and Iran-backed military vs. Saudi-backed Houthi rebels', correct: false },
            {text: 'Yemeni government and Saudi-backed military vs. Iran-backed Sunni rebels', correct: false },
            {text: 'Yemeni government and Iran-backed military vs. Saudi-backed Sunni rebels', correct: false },
        ]
    },
    {
        question: 'Who currently controls the capital of Yemen (Sanaa)?',
        answers: [
            {text: 'The Yemeni government', correct: true }, 
            {text: 'The Houthis', correct: false },
            {text: 'Both sides share control', correct: false },
            {text: 'The U.S. government', correct: false },
        ]
    },
    {
        question: 'What does the Riyadh Agreement say?',
        answers: [
            {text: 'After the war, the Yemeni government will control the country', correct: false }, 
            {text: 'After the war, the Houthis will control the country', correct: false },
            {text: 'After the war, the two sides will share control', correct: true },
            {text: 'After the war, another group will control the country', correct: false },
        ]
    },
    {
        question: 'Which side in the Yemeni crisis does the US back?',
        answers: [
            {text: 'Yemeni government', correct: true }, 
            {text: 'Houthi', correct: false },
            {text: 'Both sides', correct: false },
            {text: 'None of the above', correct: false },
        ]
    },
    {
        question: 'What is the Yemen/ Yemeni Crisis?',
        answers: [
            {text: 'The biggest humanitarian crisis in the world.', correct: true }, 
            {text: 'An epidemic.', correct: false },
            {text: 'A crisis created from a natural disaster.', correct: false },
            {text: 'A hoax created by the U.S.', correct: false },
        ]
    },
    {
        question: 'What political group is currently in power in Yemen?',
        answers: [
            {text: 'ISIS', correct: false }, 
            {text: 'Al Qaeda', correct: false },
            {text: 'Hamas', correct: false },
            {text: 'Houthis', correct: true },
        ]
    },
    {
        question: 'When and how did the Yemeni crisis end?',
        answers: [
            {text: '2011, following the siege of Dammaj', correct: false }, 
            {text: '2012, with the democratic election of president Abradabbuh Mansur Hadi', correct: false },
            {text: '2019, following the withdrawal of UN troops from Yemen', correct: false },
            {text: 'Conflict is still ongoing', correct: true },
        ]
    },
]
const questionsIraq = [
    {
        question: 'How long did the Iraq War last?',
        answers: [
            {text: '11 years', correct: false }, 
            {text: '2 years', correct: false },
            {text: '9 years', correct: true },
            {text: '5 years', correct: false },
        ]
    },
    {
        question: 'When did the Iraq War take place?',
        answers: [
            {text: '2003-2011', correct: true }, 
            {text: '2000-2009', correct: false },
            {text: '2011-2019', correct: false },
            {text: '2006-2014', correct: false },
        ]
    },
    {
        question: 'What is another name of the Iraq War?',
        answers: [
            {text: 'Middle Eastern War', correct: false }, 
            {text: 'Second Persian Gulf War', correct: true },
            {text: 'The Tanker War', correct: false },
            {text: 'First Persian Gulf War', correct: false },
        ]
    },
    {
        question: 'Who were the main countries involved in the Iraq War?',
        answers: [
            {text: 'Russia and Iraq', correct: false }, 
            {text: 'Liechtenstein and Iraq', correct: false },
            {text: 'Iran and Iraq', correct: false },
            {text: 'United States and Iraq', correct: true },
        ]
    },
    {
        question: 'Who was the President of Iraq when the Iraq War began?',
        answers: [
            {text: 'Ahmed Hassan al-Bakr', correct: false }, 
            {text: 'Abdul Rahman Arif', correct: false },
            {text: 'Saddam Hussein', correct: true },
            {text: 'Jalal Talabani', correct: false },
        ]
    },
    {
        question: 'Who was the President of the United States when the Iraq War began?',
        answers: [
            {text: 'Ronald Regan', correct: false }, 
            {text: 'George W. Bush', correct: true },
            {text: 'Bill Clinton', correct: false },
            {text: 'George H.W. Bush', correct: false },
        ]
    },
    {
        question: 'Approximately how many people died in Iraq as a result of the Iraq War',
        answers: [
            {text: '500,000', correct: true }, 
            {text: '200,000', correct: false },
            {text: '94,000', correct: false },
            {text: '120,000', correct: false },
        ]
    },
    {
        question: 'Why did the Iraq War start?',
        answers: [
            {text: 'Because the United States wanted to start another war', correct: false }, 
            {text: 'The United States speculated that Iraq was building weapons of mass destruction', correct: true },
            {text: 'The United States wanted to annex Iraq and increase their military presence in the Middle East', correct: false },
            {text: 'None of the above', correct: false },
        ]
    },
    {
        question: 'How did the Iraq war end?',
        answers: [
            {text: 'With the Status of Forces Agreement', correct: false }, 
            {text: 'Iraqi parliament approved agreements relating to future military and civilians', correct: false },
            {text: 'The United States and Iraqi people were tired of fighting and became willing to negotiate peace terms', correct: false },
            {text: 'Both A and B', correct: true },
        ]
    },
]