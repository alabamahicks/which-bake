//How do I put this stuff in a resource file?

var level1_answer1 = {
    response: 'Choux',
    elaboration: 'Choux pastry has a high moisture content which allows ' +
    'steam to force a tripling in size during baking. Its recipe is 2 parts water,' +
    ' 1 part butter, 1 part flour, 2 parts eggs, by weight.',
    imageURL: 'pastryimages/choux_pastry.jpg',
    attribution: 'http://www.kidspot.co.nz/recipes-for+2464+20+Cakes-&-Baking+Choux-pastry-recipe.htm',
    learningLink: ''
};

var level1_answer2 = {
    response: 'Puff',
    elaboration: 'Puff pastry has 1:0.9 ratio of flour to butter, by weight.',
    imageURL: 'pastryimages/puff_pastry.jpg',
    attribution: 'http://www.jusrolprofessional.co.uk/pastry-techniques/rolling-puff-pastry.aspx',
    learningLink: ''
};

var level1_answer3 = {
    response: 'Shortcrust',
    elaboration: 'Shortcrust pastry has 2:1 ratio of flour to ' +
    'fat, by weight.',
    imageURL: 'no imageURL url entered yet',
    attribution: 'http://www.bbcgoodfood.com/recipes/2983/basic-shortcrust-pastry',
    learningLink: ''
};

var level1_answer4 = {
    elaboration: 'ARLETTES - narrow slices of puff pastry flavored with cinnamon' +
    ' and arranged in spirals.',
    imageURL: 'no imageURL url entered yet',
    attribution: '',
    learningLink: ''
};

var level1_answer5 = {
    elaboration: 'VOL-AU-VENTS - a small, hollow, case of puff pastry, made by' +
    ' cutting two circles in rolled out puff, cutting a hole in one of them, then' +
    ' stacking the ring-shaped piece on top of the disk-shaped piece.  Can be ' +
    'savory or sweet-filled.',
    imageURL: 'no imageURL url entered yet',
    attribution: '',
    learningLink: ''
};

var level1_answer6 = {
    elaboration: 'BAKLAVA - Sometimes confused with puff pastry, phyllo/filo ' +
    'dough also has many layers, but unlike puff, has no fat content' +
    ' (so you brush it with butter!)',
    imageURL: 'no imageURL url entered yet',
    attribution: '',
    learningLink: ''
};

var level2_answer1 = {
    elaboration: 'OPERA CAKE - Thin almond sponge, sandwiched with ganache and' +
    ' coffee syrup, and topped with a dark chocolate glaze.',
    imageURL: 'no imageURL url entered yet',
    attribution: '',
    learningLink: ''
};

var level2_answer2 = {
    elaboration: 'CORONNE - From the French word for crown, a wreath of sweet ' +
    'bread laced with a filling via rolling, slicing open, and twisting.',
    imageURL: 'no imageURL url entered yet',
    attribution: '',
    learningLink: ''
};

var level2_answer3 = {
    elaboration: 'DACQUOISE - A dessert made with hazelnut meringue layers and ' +
    'whipped cream or buttercream',
    imageURL: 'no imageURL url entered yet',
    attribution: '',
    learningLink: ''
};

var level2_answer4 = {
    elaboration: 'KRANSEKAKE - This Swedish showstopper uses a set of graduated' +
    ' molds to build a tower of iced rings resembling a Christmas tree.',
    imageURL: 'no imageURL url entered yet',
    attribution: '',
    learningLink: ''
};

var level2_answer5 = {
    elaboration: 'GENOA - A variant of the Pandolce cake popular in Italy, which' +
    ' shares several identifying attributes with the homemade American Christmas' +
    ' fruitcake.',
    imageURL: 'no imageURL url entered yet',
    attribution: '',
    learningLink: ''
};

var level2_answer6 = {
    elaboration: 'POVITICA - An Eastern European sweet bread traditionally ' +
    'served at Christmas, featuring narrow layers of chocolate and walnut ' +
    'filling rolled and then crammed into a loaf tin, producing complex ' +
    'marbling in the slices.',
    imageURL: 'no imageURL url entered yet',
    attribution: '',
    learningLink: ''
};

var level3_answer1 = {
    elaboration: 'SCHICHTTORTE - This German 20-layer cake is cooked under the' +
    ' broiler/grill, rather than the oven.',
    imageURL: 'no imageURL url entered yet',
    attribution: '',
    learningLink: ''
};

var level3_answer2 = {
    elaboration: 'MOKATINES - Genoise sponge cut in cubes, layered with coffee' +
    ' buttercream, edged with chopped nuts stuck on with apricot jam, decorated' +
    ' with coffee-flavored buttercream, and glazed with fontant icing.',
    imageURL: 'no imageURL url entered yet',
    attribution: '',
    learningLink: ''
};

var level3_answer3 = {
    elaboration: 'ENTREMETS - a multi-layered mousse-filled cake using joconde' +
    ' sponge comprising of different complementary flavors with varying textural' +
    ' contrasts',
    imageURL: 'no imageURL url entered yet',
    attribution: '',
    learningLink: ''
};

var level3_answer4 = {
    elaboration: 'FLAOUNES - A Cypriot pecorino/halloumi cheese-filled pastry' +
    ' flavored with ground mahlepi',
    imageURL: 'no imageURL url entered yet',
    attribution: '',
    learningLink: ''
};

var level3_answer5 = {
    elaboration: 'RELIGIEUSES - Two choux buns filled with pastry cream, topped' +
    ' with chocolate ganache and decorated with a whipped cream \'collar\'.',
    imageURL: 'no imageURL url entered yet',
    attribution: '',
    learningLink: ''
};

var level3_answer6 = {
    elaboration: 'KOUIGN AMANN - A Breton cake rather like puff pastry, but ' +
    'with sugar included in the fewer layers.',
    imageURL: 'no imageURL url entered yet',
    attribution: '',
    learningLink: ''
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
    imageURL: 'no imageURL url entered yet',
    attribution: ''
};

var level1_question2 = {
    prompt: 'Which biscuits (cookies) are NOT made from puff pastry?',
    correctAnswer: level1_answer3,
    possibleAnswers: [level1_answer4, level1_answer5, level1_answer6],
    score: scoreState.UNSCORED,
    imageURL: 'no imageURL url entered yet',
    attribution: ''
};

var level2_question1 = {
    prompt: 'Which cake would work for a gluten-free friend\'s birthday?',
    correctAnswer: level2_answer3,
    possibleAnswers: [level2_answer1, level2_answer2, level2_answer3],
    score: scoreState.UNSCORED,
    imageURL: 'no imageURL url entered yet',
    attribution: ''
};

var level2_question2 = {
    prompt: 'Which holiday treat requires a special set of molds?',
    correctAnswer: level2_answer1,
    possibleAnswers: [level2_answer4, level2_answer5, level2_answer6],
    score: scoreState.UNSCORED,
    imageURL: 'no imageURL url entered yet',
    attribution: ''
};

var level3_question1 = {
    prompt: 'Which difficult bake has 20 layers?',
    correctAnswer: level3_answer1,
    possibleAnswers: [level3_answer1, level3_answer2, level3_answer3],
    score: scoreState.UNSCORED,
    imageURL: 'no imageURL url entered yet',
    attribution: ''
};

var level3_question2 = {
    prompt: 'Which of these French-sounding pastries isn\'t actually French?',
    correctAnswer: level3_answer1,
    possibleAnswers: [level3_answer4, level3_answer5, level3_answer6],
    score: scoreState.UNSCORED,
    imageURL: 'no imageURL url entered yet',
    attribution: ''
};

var holdharmless = 'This app has been prepared as an educational programming exercise and no' +
    ' profit is generated from its use.  Images appearing within are included in' +
    'appreciation for the baker\'s skills, and attribution is given for their' +
    ' sources.  Images are planned to be replaced by alternates owned by the student when' +
    'she successfully makes all of them.' +
    '  All rights reserved.';

var explanationHeader = 'Love cooking shows, but not interested in the sugar?  How big' +
    'a fan are you?';
var instructions = 'Choose a question and test your baking knowledge.  Choose a' +
    ' higher level and raise the heat in the kitchen.';

//todo: place holdharmless, explanation in intro.

var level1Questions = [level1_question1, level1_question2];
var level2Questions = [level2_question1, level2_question2];
var level3Questions = [level3_question1, level3_question2];
var allTheQuestions = [level1Questions, level2Questions, level3Questions];

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
    //write li's index to chosen Level (default = 1)
        currentLevel = $(this).index() + 1;
    loadQuestions(currentLevel);
    });


//on #questions li.click, choose quiz question
    $('#questions li').click(function() {
        //pass index number to displayQuestion
        var indexNumber = ($(this).index());
        displayQuestion(indexNumber);
    });


//on #choices li.click
    $('#choices li').click(function() {
        selectAnswer($(this).index());
    });

//on #restart click,
    $('#restart').click(function() {
        startOver();
    });
});


function displayChoices(possibleAnswers){
    //clear out what's there
    $('#choices li').remove();

    //set #choices li from possibleAnswers
    for (var i=0; i<possibleAnswers.length; i++){
        var choicePic = possibleAnswers[i].imageURL;
        $('#choices').append('<li>'+ '<img src="' + choicePic + '" width="130px" height="80px">' + '</li>');
        //todo: show possibleAnswers[i].response in added html
        //todo: show attribution - possibleAnswers[i].attribution
    }
}

function displayQuestion(indexNumber){
    //todo: set #focus.background-imageURL:url()
    //set #focus h1.text() = chosenQuestion.prompt
    for (var i=0; i<currentQuestions.length; i++){
        if (indexNumber == i){
            var ask = currentQuestions[i].prompt;
            //todo: show attribution - currentQuestions[i].attribution
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
    var levelName = 'level' + level + 'Questions';
    var index;
    for (var i=0; i<allTheQuestions.length; i++){
        index = allTheQuestions.indexOf(levelName);
    }
    currentQuestions = allTheQuestions[index];
     //todo:MARIUS - HOW TO MATCH LEVEL TO COLLECTION OF QUESTIONS?
    // else
    //if (currentLevel = 2){
    //    currentQuestions = level2Questions;
    //}

    //populate #questions with corresponding li count
    $('#questions').append('<li>' + '<i class="fa fa-question fa-2x icons" alt="Try this question">' + '</i>' + '</li>');
}

function selectAnswer(choiceIndex){
    //todo: change li.color = active state
    //todo: set #focus h1.text() = question.scoredState
    //todo: set #focus h2.text() = answer.elaboration
    //todo: set learnMore link
    displayScore();
}

function startOver(){
    userScore = 0;
    //check currentLevel
    loadQuestions(currentLevel);
}



//<li><i class="fa fa-check-square-o fa-2x icons" alt="You rock! Click to reread"></i></li>
//<li><i class="fa fa-times fa-2x icons" alt="Missed this one. Click to try again"></i></li>




