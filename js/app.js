//How do I put this stuff in a resource file?

var level1_answer1 = {
    elaboration: 'CHOUX - Choux pastry has a high moisture content which allows ' +
    'steam to force a tripling in size during baking. Its recipe is 2 parts water,' +
    ' 1 part butter, 1 part flour, 2 parts eggs, by weight.',
    image: 'no image url entered yet'
};

var level1_answer2 = {
    elaboration: 'PUFF - Puff pastry has 1:0.9 ratio of flour to butter, by weight.',
    image: 'no image url entered yet'
};

var level1_answer3 = {
    elaboration: 'SHORTCRUST - Shortcrust pastry has 2:1 ratio of flour to ' +
    'fat, by weight.',
    image: 'no image url entered yet'
};

var level1_answer4 = {
    elaboration: 'ARLETTES - narrow slices of puff pastry flavored with cinnamon' +
    ' and arranged in spirals.',
    image: 'no image url entered yet'
};

var level1_answer5 = {
    elaboration: 'VOL-AU-VENTS - a small, hollow, case of puff pastry, made by' +
    ' cutting two circles in rolled out puff, cutting a hole in one of them, then' +
    ' stacking the ring-shaped piece on top of the disk-shaped piece.  Can be ' +
    'savory or sweet-filled.',
    image: 'no image url entered yet'
};

var level1_answer6 = {
    elaboration: 'BAKLAVA - Sometimes confused with puff pastry, phyllo/filo ' +
    'dough also has many layers, but unlike puff, has no fat content' +
    ' (so you brush it with butter!)',
    image: 'no image url entered yet'
};

var scoreState = {
    UNSCORED: 1,
    CORRECT: 2,
    INCORRECT: 3
};

var level1_question1 = {
    prompt: 'Which pastry has the highest fat content?',
    correctAnswer: level1_answer2,
    possibleAnswers: [level1_answer1, level1_answer2, level1_answer3],
    score: scoreState.UNSCORED,
    image: 'no image url entered yet'
};

var level1_question2 = {
    prompt: 'Which biscuits (cookies) are NOT made from puff pastry?',
    correctAnswer: level1_answer3,
    possibleAnswers: [level1_answer4, level1_answer5, level1_answer6],
    score: scoreState.UNSCORED,
    image: 'no image url entered yet'
};

var currentLevel = 1;
var currentQuestions = [];
var userScore = 0;

//on page load:
// show quiz intro
// hide rest of UI
startOver();
loadQuestions(currentLevel);

//on #something click, hide quiz intro, show rest of UI

//on #theme-picker li.click,
//write index to quizLevel (default = 1)
loadQuestions(currentLevel);

//on #questions li.click, choose quiz question
//????pass index number to displayQuestion
//change #questions li.color = active state

//on #choices li.click
selectAnswer();

//on #restart click,
startOver();


function displayChoices(possibleAnswers){
    //set #choices li(each) from possibleAnswers
}

function displayQuestion(indexNumber){
    //set #focus.background-image:url()
    //set #focus h1.text() = chosenQuestion.prompt
    //set #focus h2.text() = ""
    displayChoices(chosenQuestion.possibleAnswers);
}

function displayScore(){
    // how many questions are loaded?
    // how many are correct?
    // update UI...?
}

function loadQuestions(quizLevel){
    //set var currentQuestions to some collection of question objects
    if (currentLevel = 1){
        currentQuestions = [level1_question1, level1_question2];
    }
    //populate #questions with corresponding li count
}

function selectAnswer(choiceIndex){
    //change li.color = active state
    //set #focus h1.text() = question.scoredState
    // set #focus h2.text() = answer.elaboration
    displayScore();
}

function startOver(){
    userScore = 0;
    //check currentLevel
    loadQuestions(currentLevel);
    //set #questions li class to 'fa-question'
}








