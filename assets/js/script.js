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
    shuffleQuestions = questions.sort(() => Math.random() - 0.5);
    getNextQuestion();
}

function getNextQuestion() {
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

            buttons.forEach(btn => {
                btn.addEventListener("click", userSelectedButton);
            });

            function userSelectedButton(e) {
                totalPoints += parseInt(e.target.dataset.points);
                currentQuestion += 1;
                if (currentQuestion < 12) {
                    getNextQuestion();
                } else {
                    calculateResults();
                }
            }

            function calculateResults() {
                let result = "";
                if (totalPoints <= 4) {
                    result = "Thor! Because like Thor, you have a very charming personality! You know how to work a room, with your bold, energetic presence!";
                } else if (totalPoints >18 && totalPoints <= 24) {
                    result = "Black Widow! You are very practical. Although you love to be free, you are drawn to understand how things work. Things never slide by you.";
                } else if (totalPoints >4 && totalPoints <= 8) {
                    result = "Captain America! Sweet, kind and thoughtful are the words to describe your personailty as well as Cap A! Always working to serve others, because helping others is your main focus.";
                } else if (totalPoints >24 && totalPoints <= 29) {
                    result = "Hulk! As an extremely emotional indiviual with a slight temper problem, you relate most you the Hulk! Do you have trouble remembering important dates? Well so does he!";
                } else if (totalPoints >29 && totalPoints <= 32) {
                    result = "Hawkeye! A very strong introvert. You think very logically, extremely observant of what goes on around you in the real world.";
                } else if (totalPoints >12 && totalPoints <= 18) {
                    result = "Ironman! Love being the center of attention? Whilst being an extrovert, and the center of every room you have a brain that works like no other. You are hugely intelligent, and caring. ";
                } else if (totalPoints >8 && totalPoints <= 12) {
                    result = "Nick Fury! Along with your witty personality, sharp workmanship and even better sense of humor is your ability to take the lead. You are a decisive, capable. principled person.";
                };

                finalResult.classList.remove("hide");
                finalResult.innerText = `Your personality is most similar to ${result}`;
                game.classList.add("hide");
                restart.classList.remove("hide");
            }

            restart.addEventListener("click", resetGame);

            function resetGame() {
                restart.classList.add("hide");
                startBtn.classList.remove("hide");
                intro.classList.remove("hide");
                currentQuestion = 0;
                totalPoints = 0;
                finalResult.classList.add("hide");
            }









const questions = [
    {
        question: "What skill seperates you from others?",
        choices: [
            {
                option: "I can shoot on the bullseye.",
                points: 0
            },
            {
                 option: "I am extremely rational and intelligent.",
                 points: 1
            },
            {
                option: "I have a way with words.",
                points: 2
            },
            {
                option: "I have extremely strong strength.",
                points: 3
            }
        ]
    },
    {
        question: "You would consider yourself to be...",
        choices: [
            {
                option: "Strong and confident.",
                points: 3
            },
            {
                 option: "Responsible and experienced.",
                 points: 2
            },
            {
                option: "Witty and good-looking.",
                points: 0
            },
            {
                option: "Friendly and funny",
                points: 1
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
                 points: 2
            },
            {
                option: "Jealousy.",
                points: 1
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
                option: "Hide my idenity to protect your close ones.",
                points: 0
            },
            {
                 option: "Live life as if I dont have any powers at all.",
                 points: 1
            },
            {
                option: "Flaunt my powers to become rich and famous.",
                points: 3
            },
            {
                option: "Share the secret with my friends and family only.",
                points: 2
            }
        ]
    },
    {
        question: "People close to you would consider you ...",
        choices: [
            {
                option: "Generous and big hearted person.",
                points: 0
            },
            {
                 option: "Selfish and a manipulative individual.",
                 points: 3
            },
            {
                option: "To have a tough exterior, soft interior.",
                points: 2
            },
            {
                option: "Protective, put your life on the line at all costs. ",
                points: 1
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
                 points: 3
            },
            {
                option: "Extreme extrovert.",
                points: 2
            },
            {
                option: "Perfectionist.",
                points: 1
            }
        ]
    },
    {
        question: "In highschool, were you... ",
        choices: [
            {
                option: "Class clown.",
                points: 1
            },
            {
                 option: "Always had my head buried in books.",
                 points: 2
            },
            {
                option: "Too smart for school, so I never went.",
                points: 3
            },
            {
                option: "Teachers pet just to get by.",
                points: 0
            }
        ]
    },
    {
        question: "It looks like the enemy is closing in, what do you do?",
        choices: [
            {
                option: "Cause a distraction so your team can come up behind them.",
                points: 0
            },
            {
                 option: "Go handle them on my own.",
                 points: 3
            },
            {
                option: "Wait for someone else to take charge.",
                points: 2
            },
            {
                option: "Rally my team to attack together.",
                points: 1
            }
        ]
    },
    {
        question: "What would be your biggest flaw?",
        choices: [
            {
                option: "Ego.",
                points: 1
            },
            {
                 option: "Heart.",
                 points: 0
            },
            {
                option: "Temper.",
                points: 3
            },
            {
                option: "Ability to work as a team.",
                points: 2
            }
        ]
    },
    {
        question: "Who was your favourite hero when you were young?",
        choices: [
            {
                option: "Superman.",
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
                option: "I was my own hero.",
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
                option: "I am an asset in general.",
                points: 3
            }
        ]
    },
    {
        question: "You'd consider yourself to be",
        choices: [
            {
                option: "Always cool, calm and collected.",
                points: 2
            },
            {
                 option: "Go with the flow, easy going.",
                 points: 1
            },
            {
                option: "Very nervous unsure person.",
                points: 0
            },
            {
                option: "Easily angered and frustrated.",
                points: 3
            }
        ]
    }
]