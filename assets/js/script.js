/* jshint esversion */
let startBtn = document.getElementById("start-button");
let restartBtn = document.getElementById("restart-button");
let gameArea = document.getElementById("game");
let logo = document.getElementById("logo");
let intro = document.getElementById("intro");
let restart = document.getElementById("restart-button");
let questionSpan = document.getElementById("question");
let buttons = document.querySelectorAll(".btn");
let finalResult = document.getElementById("final-result");
let totalPoints = 0;
let currentQuestion = 0;
let shuffleQuestions;
let shuffledChoices;


startBtn.addEventListener("click", startGame);

function startGame() {
    game.classList.remove("hide");
    startBtn.classList.add("hide");
    intro.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    getNextQuestion();
}

function getNextQuestion(){
    shuffleQuestions.forEach((question, questionIndex) => {
        if (questionIndex == currentQuestion) {
            shuffledChoices = question.choices.sort(() => Math.random() - 0.5);
            questionSpan.innerText = question.question 
                shuffledChoices.forEach((choice, choiceIndex) => {
                    buttons.forEach((btn, buttonIndex) => {
                        if (choiceIndex == buttonIndex) {
                            btn.innerText = choice.option;
                            btn.dataset.points = choice.points;
                        }
                    });
                 });
                }
              });
            }

const questions = [
    {
        question: "What skill seperates you from others?",
        choices: [
            {
                option: "You can shoot on the bullseye.",
                points: 0
            },
            {
                 option: "You are a super fast runner.",
                 points: 1
            },
            {
                option: "You have a way with words.",
                points: 2
            },
            {
                option: "You have extremely strong strength.",
                points: 3
            }
        ]
    },
    {
        question: "You would consider yourself to be...",
        choices: [
            {
                option: "Strong and confident.",
                points: 0
            },
            {
                 option: "Responsible and experienced.",
                 points: 1
            },
            {
                option: "Witty and good-looking.",
                points: 2
            },
            {
                option: "Friendly and funny",
                points: 3
            }
        ]
    },
    {
        question: "What motivates you?",
        choices: [
            {
                option: "Justice.",
                points: 0
            },
            {
                 option: "Duty.",
                 points: 1
            },
            {
                option: "Jealousy.",
                points: 2
            },
            {
                option: "Revenge.",
                points: 3
            }
        ]
    },
    {
        question: "If you were a superhero, you would...",
        choices: [
            {
                option: "Hide your idenity to protect your close ones.",
                points: 0
            },
            {
                 option: "Live life as if you dont have any powers at all.",
                 points: 1
            },
            {
                option: "Flaunt your powers to become rich and famous.",
                points: 2
            },
            {
                option: "Share the secret with friends and family only.",
                points: 3
            }
        ]
    },
    {
        question: "People close to you would consider you a...",
        choices: [
            {
                option: "Generous, big hearted person.",
                points: 0
            },
            {
                 option: "Selfish and manipulative.",
                 points: 1
            },
            {
                option: "Tough exterior, soft interior.",
                points: 2
            },
            {
                option: "Protective, put your life on the line at all costs. ",
                points: 3
            }
        ]
    },
    {
        question: "Would you consider yourself a...",
        choices: [
            {
                option: "People pleaser.",
                points: 0
            },
            {
                 option: "Loaner.",
                 points: 1
            },
            {
                option: "Extreme extrovert.",
                points: 2
            },
            {
                option: "Perfectionist.",
                points: 3
            }
        ]
    },
    {
        question: "In highschool, were you... ",
        choices: [
            {
                option: "Class clown.",
                points: 0
            },
            {
                 option: "Always had head buried in books.",
                 points: 1
            },
            {
                option: "Too smart for school, so never went.",
                points: 2
            },
            {
                option: "Teachers pet just to get by.",
                points: 3
            }
        ]
    },
    {
        question: "It's looks like the enemy is closing in, what do you do?",
        choices: [
            {
                option: "Cause a distraction so your team can come up behind them.",
                points: 0
            },
            {
                 option: "Go handle them on your own.",
                 points: 1
            },
            {
                option: "Wait for someone else to take charge.",
                points: 2
            },
            {
                option: "Rally your team to attack together.",
                points: 3
            }
        ]
    },
    {
        question: "What would be your biggest flaw?",
        choices: [
            {
                option: "Ego.",
                points: 0
            },
            {
                 option: "Heart.",
                 points: 1
            },
            {
                option: "Temper.",
                points: 2
            },
            {
                option: "Ability to work as a team.",
                points: 3
            }
        ]
    },
    {
        question: "Who was your favourite hero when you were young?",
        choices: [
            {
                option: "Buzzlight year.",
                points: 0
            },
            {
                 option: "Batman.",
                 points: 1
            },
            {
                option: "Spiderman duh.",
                points: 2
            },
            {
                option: "Myself.",
                points: 3
            }
        ]
    },
    {
        question: "What would be your biggest asset to a team?",
        choices: [
            {
                option: "My moral compass.",
                points: 0
            },
            {
                 option: "My leadership.",
                 points: 1
            },
            {
                option: "My experience.",
                points: 2
            },
            {
                option: "Me in general is an asset.",
                points: 3
            }
        ]
    },
    {
        question: "You'd consider yourself to be",
        choices: [
            {
                option: "Always cool, calm and collected.",
                points: 0
            },
            {
                 option: "Go with the flow, easy going.",
                 points: 1
            },
            {
                option: "Very nervous unsure person.",
                points: 2
            },
            {
                option: "Easily angered and frustrated.",
                points: 3
            }
        ]
    }
]