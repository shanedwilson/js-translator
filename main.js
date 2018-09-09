const languages = {
    blank: {

    },

    french: {
        merry: "Joyeux",
        christmas: "Noël",
        and: "et",
        happy: "content",
        new: "Nouveau",
    },

    afrikans : {
        merry: "Vrolik",
        christmas: "Kersfees",
        and: "en",
        happy: "gelukkig",
        new: "nuwe",
        year: "jaar"
    },

    zulu : {
        merry: "Ujabule",
        christmas: "Christmas",
        and: "futhi",
        happy: "ujabule",
        new: "okusha",
        year: "ngonyaka"
    }
};

let buttons = document.getElementById('button__div');
let translation = [];
let buttonArray = document.getElementsByClassName('language__button');
var lang = Object.keys(languages);

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const translator = () => {
    let randomize = Math.floor((Math.random() * lang.length) + 1);
    let language =''
    translation = [];
    if (event.target.id === 'random') {
         language = lang[randomize];
    } else {
        language = event.target.id;
    }
    let inputText = document.getElementById("input__field").value;
    inputText = inputText.toLowerCase();  
    let inputArray = inputText.split(' ');
        for (var i = 0; i < inputArray.length; i++) {
            translation.push(languages[language][inputArray[i]]);
        }  
    stringBuilder();
};        

const stringBuilder = () => {
    let newString = '';
        if (translation.includes(undefined)) {
            newString = "Undefined words have been entered";
        } else {
            newString = `Your translation is ${translation.join(" ")}.`;
        }
    printToDom(newString, "translate__div");
};

buttons.addEventListener("click", translator);