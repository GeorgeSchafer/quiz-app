
'use strict';

function welcomePage(){
    /** The starting screen should have a button that users can click to start the quiz. */

    /** 
     * This function will welcome the user to the quiz and invite the user to continue.
     */

    console.log(`welcomePage() ran`);
}

function questionLoop(){
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

    console.log(`questionLoop() ran`);
}

function finalScore(){
    /** Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked.
        Users should be able to start a new quiz.*/

    /**
     * user will be presented with their score and prompted to start a new quiz
     * 
     */

     console.log(`finalScore() ran`)
;}










function init(){
    welcomePage();
    questionLoop();
    finalScore();
}

$(init);