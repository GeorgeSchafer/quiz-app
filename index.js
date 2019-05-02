
'use strict';

const STORE = [{
        question: '"Ovomorph" is the name of which stage of Xenomorph biology?',
        answers: [
            'chest-burster',
            'facehugger',
            'pupa',
            'egg'
        ],
        correctAnswerIndex: 3
    },
    {
        question: 'Cutting a xenomorph at any phase of life is unsafe because of what property of its blood?',
        answers: [
            'emo-ness',
            'acidity',
            'noxiousness',
            'asthma-inducing'
        ],
        correctAnswerIndex: 1
    },
    {
        question: 'Xenomorph ova attract intelligent creatures by openning its four lobes when a potential host--?',
        answers: [
            'comes close',
            'is attracted by the sweet smell',
            'picks up and shakes the ova',
            'licks the ova'
        ],
        correctAnswerIndex: 0
    },
    {
        question: 'Should you become infected by a Xenomorph egg, other Weyland-Yutani staff will not be able to remove it because--?',
        answers: [
            'it would contravene safety protocols',
            'management will not allow it',
            'Xenomorph infection is incurable.',
            'All of the above'
        ],
        correctAnswerIndex: 3
    },
    {
        question: 'When handling the eggs and facehuggers, I acknowledge that my and my coworkers safety is the responsibility of --?',
        answers: [
            'Weyland-Yutani Corporation',
            'my supervisor',
            'the entire team',
            'myself'
        ],
        correctAnswerIndex: 2
    },

];


/**
 * QuestionCounter remembers which question the user is on.
 * Score remembers how many questions the user got right.
 */
let questionCounter = 0;
let score = 0;

function welcomePage() {
    /** The starting screen should have a button that users can click to start the quiz. */

    /** 
     * This function will welcome the user to the quiz and invite the user to continue.
     */


    $('.head').html('<h1>Welcome!</h1>');
    $('.body').text('Placeholder text');
    $('.body').append(`<div class='start'>Click here to start</div>`);
    $('.body').on('click', '.start', questionLoop() );

    console.log(`welcomePage() ran`);


}

function questionLoop() {
    /** Users should be prompted through a series of at least 5 multiple choice questions that they can answer.
            Users should be asked questions 1 after the other.
            Users should only be prompted with 1 question at a time.
        Users should not be able to skip questions.
        Users should also be able to see which question they're on (for instance, "7 out of 10") and their current score ("5 correct, 2 incorrect").
        Upon submitting an answer, users should:
            receive textual feedback about their answer. If they were incorrect, they should be told the correct answer.
            be moved onto the next question (or interact with an element to move on). */


    /**
     * This function will iterate the user through the questions (and their answers).
     * it will also keep score
     */

    $(`.head`).empty();
    $('.body').html(`<ul class='answerBucket'></ul>`);


    $('.answerBucket').empty();
    $('.head').html(`<h2>${STORE[questionCounter].question}</h2>`);
    for(let j = 0 ; j < STORE[questionCounter].answers.length ; j++){
        $(`.answerBucket`).append(`<li>${STORE[questionCounter].answers[j]}</li>`); 
    }
    
    questionCounter++;
    


    console.log(`questionLoop() ran`);
}

function finalScore() {
    /** Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked.
        Users should be able to start a new quiz.*/

    /**
     * user will be presented with their score and prompted to start a new quiz
     * 
     */

    console.log(`finalScore() ran`);
}










function init() {
    welcomePage();
}

$(init);