/**
 * Created by sarahhicks on 11/9/15.
 */

//display quiz intro

//close quiz intro

//choose quiz level


//choose quiz question
/*display levelNumber questionNumber*/

//choose answer
/*display levelNumber questionNumber answers*/

//increment score

//start over


var level1_answer1 = {
    response: 'no response entered yet',
    elaboration: 'no elaboration entered yet',
    image: 'no image url entered yet'
};

var level1_answer2 = {
    response: 'no response entered yet',
    elaboration: 'no elaboration entered yet',
    image: 'no image url entered yet'
};

var level1_answer3 = {
    response: 'no response entered yet',
    elaboration: 'no elaboration entered yet',
    image: 'no image url entered yet'
};

var level1_answer4 = {
    response: 'no response entered yet',
    elaboration: 'no elaboration entered yet',
    image: 'no image url entered yet'
};

var level1_answer5 = {
    response: 'no response entered yet',
    elaboration: 'no elaboration entered yet',
    image: 'no image url entered yet'
};

var level1_answer6 = {
    response: 'no response entered yet',
    elaboration: 'no elaboration entered yet',
    image: 'no image url entered yet'
};

var scoreState = {
    UNSCORED: 1,
    CORRECT: 2,
    INCORRECT: 3
};

var level1_question1 = {
    prompt: 'no prompt entered yet',
    correctAnswer: level1_answer1,
    possibleAnswers: [level1_answer1, level1_answer2, level1_answer3],
    score: scoreState.UNSCORED,
    image: 'no image url entered yet'
};

var level1_question2 = {
    prompt: 'no prompt entered yet',
    correctAnswer: level1_answer1,
    possibleAnswers: [level1_answer4, level1_answer5, level1_answer6],
    score: scoreState.UNSCORED,
    image: 'no image url entered yet'
};

function displayScore(){
    // how many questions are loaded?
    // how many are correct?
    // update UI
}