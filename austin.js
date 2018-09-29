const french = {
    merry: "Joyeux",
    christmas: "Noël",
    and: "et",
    happy: "content",
    new: "Nouveau",
    year: "an"
};

const afrikans = {
merry: "vrolik",
christmas: "Kersfees",
and: "en",
happy: "gelukkig",
new: "nuwe",
year: "jaar"
};

const zulu = {
merry: "ujabule",
christmas: "christmas",
and: "futhi",
happy: "ujabule",
new: "okusha",
year: "ngonyaka"
};


const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = `${stringToPrint} `;
};

const frenchButton = document.getElementById("french__button");

const spanishTranslate = () => {
    var userInput = document.getElementById('input__field').value;
    var wordList = userInput.split(" ");
    var badWords = '';
    var goodWords = '';
    wordList.forEach((word) => {
        if (word in french) {
            goodWords += `${french[word]} `;
        }else{
            badWords += `<div>${word}</div>`;
        }
    }
);
    printToDom(`<div>"${userInput}" translates to: "${goodWords}"</div><br>` + `<div>The following words are not in this Spanish dictionary:</div><br>` + `<div> ${badWords}</div>`, 'translate__div');
}

frenchButton.addEventListener("click", spanishTranslate);
