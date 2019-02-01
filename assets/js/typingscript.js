$(document).ready(function()  {
    
    /* array of arrays containing keyboard labels by row */
    const qwerty = [["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
                ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
                    ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
                        ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]]; 

    const qwertyShift = [['`','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
                ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'],
                  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"],
                    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/']];

    // test data
    let wordData = {
        seconds: 0,
        correct: 0,
        incorrect: 0,
        total: 0,
        wpm: 0
    };

    function assignKeyboard(type) {
        for (i = 0; i < type.length; i++) { 
            for (n = 0; n < type[i].length; n++) {
                hexId = String(n) + "row" + String(i);
                document.getElementById(hexId).innerHTML = type[i][n];
            }
        }
    }
    let currentKeyboard = qwerty;
    let currentKeyboardShift = qwertyShift;
    assignKeyboard(currentKeyboard);

    const typingText = ["In the eleven years that separated the Declaration of the Independence of the United States from the completion of that act in the ordination of our written Constitution, the great minds of America were bent upon the study of the principles of government that were essential to the preservation of the liberties which had been won at great cost and with heroic labors and sacrifices.", 
                        "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.",
                        "A green hunting cap squeezed the top of the fleshy balloon of a head. The green earflaps, full of large ears and uncut hair and the fine bristles that grew in the ears themselves, stuck out on either side like turn signals indicating two directions at once. Full, pursed lips protruded beneath the bushy black moustache and, at their corners, sank into little folds filled with disapproval and potato chip crumbs.", 
                        "In the late summer of that year we lived in a house in a village that looked across the river and the plain to the mountains. In the bed of the river there were pebbles and boulders, dry and white in the sun, and the water was clear and swiftly moving and blue in the channels. Troops went by the house and down the road and the dust they raised powdered the leaves of the trees. "];

    /* choose random text from typingText array and assign a maxlength for the textarea */
    function assignText() {
        let text = typingText[Math.floor(Math.random() * typingText.length)];
        $('#text p').text(text);
        $("#typingbox").attr('maxlength', text.length);
        wordData['total'] = text.split(' ').length;
        console.log(wordData['total']);
    }
    
    assignText();

    
    /* begin functionality for the typing effects on hexagonal keyboard */
    function hexChanger(keyOpacity, keyboard) {
        return event => {
            let keyName = event.key;

            for (i = 0; i < keyboard.length; i++) { 
                for (n = 0; n < keyboard[i].length; n++) {
                    if (keyboard[i][n] === String(keyName) || keyboard[i][n].toUpperCase() === String(keyName)) {
                        hexId = String(n) + "row" + String(i);
                        document.getElementById(hexId).parentNode.style.opacity = keyOpacity;
                    }
                }
            }
        }
    };

    //TODO: add fucntionality for caps-lock
    // Keyup event that changes keyboard if shift key is pressed
    function shiftDown(e) {
        if (e.keyCode == 16) {
            assignKeyboard(currentKeyboardShift);
        }
    }
    
    // Keyup event that changes keyboard if shift key is let go
    function shiftUp(e) {
        if (e.keyCode == 16) {
            assignKeyboard(currentKeyboard);
        }
    }

    document.addEventListener('keydown', shiftDown, false);
    document.addEventListener('keyup', shiftUp, false);

    let onKeyDown = hexChanger('0.1', qwerty);
    let onKeyUp = hexChanger('1', qwerty);
    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);

    


    /* TODO: need to add functionality for multiple keyboards
        also maybe make the key opacity change for a set amount of time
    */

    // Changes the display value of an element from none to the onSetting. If not on none, changes it to none
    function toggleDisplay(elemId, onSetting='initial') {
        if ($(elemId).css('display') === 'none') {
            $(elemId).css('display', onSetting);
        } else {
            $(elemId).css('display', 'none');
        }
        console.log(wordData)

    } 

    /* checks if the last character typed in the textarea is correct and updates the wordData accordingly.
        also adds a red underline to all of the text if the letter typed is incorrect 
        also checks to see if all of the text has been typed, if so, the results are displayed */
    function checkLetter() {
        let typed = document.querySelector('textarea').value;

        let currentLetter = typed[typed.length - 1];
        let correctText = $('#text p').text();

        // display results after text is completed and remove textarea and navbar
        if (typed.length === correctText.length) {
            toggleDisplay('#resultbox', 'flex');
            calculateResults(correctText, typed);
            
            $('#navbar').css('visibility', 'hidden');
            $('#text').css('visibility', 'hidden');
        }

        // check if last letter typed is correct
        if (currentLetter !== correctText[typed.length - 1]) {
            $('#typingbox').css('text-decoration', 'underline #F26D60');
        } else {
            $('#typingbox').css('text-decoration', 'none');
        }
    }


    function calculateResults(correctText, typedText) {
        // parse text
        let correctWords = correctText.split(' ');
        let maybeCorrectWords = typedText.split(' ');        
        let wordsCorrect = 0;


        for (let i = 0; i < correctWords.length; i++) {
            if (correctWords[i] === maybeCorrectWords[i]) {
                wordsCorrect++
            }
        }

        wordData['correct'] = wordsCorrect
        wordData['incorrect'] = wordData['total'] - wordData['correct'];
        wordData['wpm'] = Math.round((wordData['total'] / (wordData['seconds'] / 60)));

        document.getElementById("resultbox").firstElementChild.innerHTML = `Total time: ${wordData['seconds']} seconds <br> WPM: ${wordData['wpm']}<br> Errors: ${wordData['incorrect']}<br>`;
    };

    // adds the checkLetter function to the textbox as an event listener
    var textArea = document.querySelector('textarea');
    textArea.addEventListener('input', checkLetter, false); 
    
    
    //shows result box at the moment but should show options- not in html yet    
    $("#options").click(function () {toggleDisplay('#resultbox', 'flex')});

    //timer function for wpm calculation and display in timer box
    let timerOn = false;
    function setTimer() {
        if (timerOn === false) {
            window.setInterval(() => {
                wordData['seconds']++;
                minutes = String(Math.floor(wordData['seconds'] / 60));
                if (wordData['seconds'] % 60 < 10) {
                    seconds = '0' + String(wordData['seconds'] % 60);
                } else {
                    seconds = String(wordData['seconds'] % 60);
                }

                timeInMinutes = minutes + ':' + seconds;
                document.getElementById("timer").innerHTML = timeInMinutes;
            }, 1000);
            timerOn = true;
        }
    }
    textArea.addEventListener('input', setTimer, false); 


    /* begin functionality for restart and options buttons */
    $('#restart').click(function () {resetTest();});
    function resetTest() {
        location.reload();

        /*
        wordData = {
            seconds: 0,
            correct: 0,
            incorrect: 0,
            total: 0,
            wpm: 0
        };
        assignText();
        timerOn = false;
        document.getElementById('timer').innerHTML = '0:00';
        toggleDisplay('#resultbox', 'flex');
        
        $('#navbar').css('visibility', 'visible');
        $('#text').css('visibility', 'visible');

        $('#typingbox').focus();
        */
    }


    // take away options until fully functional
    $("#options").css('display', 'none')

});