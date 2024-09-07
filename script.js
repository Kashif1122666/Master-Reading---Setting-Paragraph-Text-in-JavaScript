// Reading and setting paragraph text 

// function to read paragraph text 
function readPragraphText() {
    var paragraph = document.getElementById('myParagraph');
    var output = document.getElementById('output');
    var paragraphText = paragraph.textContent;
    output.textContent = 'Current paragraph text:"' + paragraphText + '"';
}

// function to set new paragraph text 
function setParagraphText() {
    var paragraph = document.getElementById('myParagraph');
    var newTextInput = document.getElementById('newTextInput');
    var output = document.getElementById('output');
    var newText = newTextInput.value;

    if (newText.trim() === '') {
        output.textContent = 'please enter some text to set!'
    } else {
        paragraph.textContent = newText;
        output.textContent = 'Paragraph text has been updated!';
        newTextInput.value = '';
        
    }
}