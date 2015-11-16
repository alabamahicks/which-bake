//How do I put this stuff in a resource file?

var level1_answer1 = {
    elaboration: 'CHOUX - Choux pastry has a high moisture content which allows ' +
    'steam to force a tripling in size during baking. Its recipe is 2 parts water,' +
    ' 1 part butter, 1 part flour, 2 parts eggs, by weight.',
    imageURL: 'no imageURL url entered yet'
};

var level1_answer2 = {
    elaboration: 'PUFF - Puff pastry has 1:0.9 ratio of flour to butter, by weight.',
    imageURL: 'no imageURL url entered yet'
};

var level1_answer3 = {
    elaboration: 'SHORTCRUST - Shortcrust pastry has 2:1 ratio of flour to ' +
    'fat, by weight.',
    imageURL: 'no imageURL url entered yet'
};

var level1_answer4 = {
    elaboration: 'ARLETTES - narrow slices of puff pastry flavored with cinnamon' +
    ' and arranged in spirals.',
    imageURL: 'no imageURL url entered yet'
};

var level1_answer5 = {
    elaboration: 'VOL-AU-VENTS - a small, hollow, case of puff pastry, made by' +
    ' cutting two circles in rolled out puff, cutting a hole in one of them, then' +
    ' stacking the ring-shaped piece on top of the disk-shaped piece.  Can be ' +
    'savory or sweet-filled.',
    imageURL: 'no imageURL url entered yet'
};

var level1_answer6 = {
    elaboration: 'BAKLAVA - Sometimes confused with puff pastry, phyllo/filo ' +
    'dough also has many layers, but unlike puff, has no fat content' +
    ' (so you brush it with butter!)',
    imageURL: 'no imageURL url entered yet'
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
    imageURL: 'no imageURL url entered yet'
};

var level1_question2 = {
    prompt: 'Which biscuits (cookies) are NOT made from puff pastry?',
    correctAnswer: level1_answer3,
    possibleAnswers: [level1_answer4, level1_answer5, level1_answer6],
    score: scoreState.UNSCORED,
    imageURL: 'no imageURL url entered yet'
};

var level1Questions = [level1_question1, level1_question2];

var currentLevel = 1;
var currentQuestions = [];
var userScore = 0;

//on page load:
$( document ).ready(function() {
    event.preventDefault(); //prevents default reloading
    // show quiz intro
    //('#quiz-intro').show();
    //todo: build #quiz-intro
    //todo: hide rest of UI
    startOver();
    loadQuestions(currentLevel);

//todo: on #something click, hide quiz intro, show rest of UI
    $( '#addItem').click(function() {
        //SHOW ENTRY
        $('.entry-box').show();
    });

//on #theme-picker li.click,
    $('#theme-picker li').click(function() {
        //alert('#theme-picker li clicked');
    //todo: write li's index to chosen Level (default = 1)
    //    alert(event);
    //    alert($(this).index());
        currentLevel = $(this).index() + 1;
    loadQuestions(currentLevel);
    });


//on #questions li.click, choose quiz question
    $('#questions li').click(function() {
        //alert('#questions li clicked');
        //pass index number to displayQuestion
        var indexNumber = ($(this).index());
        displayQuestion(indexNumber);
    });


//on #choices li.click
    $('#choices li').click(function() {
        //alert('#choices li clicked');
        selectAnswer($(this).index());
    });

//on #restart click,
    $('#restart').click(function() {
        //alert('#restart clicked');
        startOver();
    });
});


function displayChoices(possibleAnswers){
    //clear out what's there
    $('#choices li').remove();

    //set #choices li from possibleAnswers
    for (var i=0; i<possibleAnswers.length; i++){
        var choicePic = possibleAnswers[i].imageURL;
        $('#choices').append('<li>'+ '<img src="' + choicePic + '">' + '</li>');
    }
}

function displayQuestion(indexNumber){
    //todo: set #focus.background-imageURL:url()
    //set #focus h1.text() = chosenQuestion.prompt
    for (var i=0; i<currentQuestions.length; i++){
        if (indexNumber == i){
            var ask = currentQuestions[i].prompt;
            var choices = currentQuestions[i].possibleAnswers;
            $('#focus h1').html(ask);
            $('#focus h2').hide();
            displayChoices(choices);
            //todo: change #questions li.color = active state
            var childNumber = indexNumber + 1;
            $('#questions li:nth-child(childNumber)').addClass('active');
        }
    }
    displayChoices(chosenQuestion.possibleAnswers);
}

function displayScore(){
    // todo: MARIUS - charting recommendation?
    // todo: how many questions are loaded?
    // todo: how many are correct?
    // todo: update UI...?
}

function loadQuestions(level){
    //set var currentQuestions to some collection of question objects
    if (level = 1) {
        currentQuestions = level1Questions;
    } //todo:MARIUS - HOW TO MATCH LEVEL TO COLLECTION OF QUESTIONS?
    // else
    //if (currentLevel = 2){
    //    currentQuestions = level2Questions;
    //}

    //populate #questions with corresponding li count - TEST
    $('#questions').append('<li>' + '<i class="fa fa-question fa-2x icons" alt="Try this question">' + '</i>' + '</li>');
}

function selectAnswer(choiceIndex){
    //todo: change li.color = active state
    //todo: set #focus h1.text() = question.scoredState
    //todo: set #focus h2.text() = answer.elaboration
    displayScore();
}

function startOver(){
    userScore = 0;
    //check currentLevel
    loadQuestions(currentLevel);
}



//<li><i class="fa fa-check-square-o fa-2x icons" alt="You rock! Click to reread"></i></li>
//<li><i class="fa fa-times fa-2x icons" alt="Missed this one. Click to try again"></i></li>




