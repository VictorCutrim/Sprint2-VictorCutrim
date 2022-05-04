
/*Definição das perguntas e respostas do quiz*/
const quizData = [
    {
        question: "Quem ambienta o deserolar da trama em uma partida de RPG?",
        a: "Mestre",
        b: "Jogadores",
        c: "Monstros",
        d: "Localização",
        correct: "a",
    },
    {
        question: "Como se mensura a ação e o combate de uma partida?",
        a: "O jogador decide tudo",
        b: "O mestre decide tudo",
        c: "Siguindo o seu coração",
        d: "Utilizando dados apropriados",
        correct: "d",
    },
    {
        question: "O que é essencial para que todos os jogadores tenham uma boa jogatina?",
        a: "Interpretações de papeis",
        b: "Ficar jogando Angry Birds no celular",
        c: "Ter o livro mais caro",
        d: "Usar um chapéu de mago",
        correct: "a",
    },
    {
        question: "Qual é o sistema de RPG mais famoso feito por brasileiros?",
        a: "Cultos Inomináveis",
        b: "Mutantes e Malfeitores",
        c: "Tormenta 20",
        d: "Vampiro: A Máscara",
        correct: "c",
    },


];

/*Declaração das constantes a serem utilizadas no quiz*/

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

/*Declaração das variáveis a serem utilizadas no quiz*/

let currentQuiz = 0
let score = 0

loadQuiz()
/*Confecção das funções a serem computadas durante quiz*/
function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else { /*Código que possibilita ao usuário refazer o quiz*/
            quiz.innerHTML = `
           <h2>Você conseguiu responder ${score}/${quizData.length} questões corretamente</h2>

           <button onclick="location.reload()">Refazer Quiz</button>
           `
        }
    }
})
