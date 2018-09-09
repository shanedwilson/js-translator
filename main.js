const languages = {
    French: {
        merry: "Joyeux",
        christmas: "Noël",
        and: "et",
        happy: "content",
        new: "Nouveau",
        year: "an"
    },

    Afrikans : {
        merry: "Vrolik",
        christmas: "Kersfees",
        and: "en",
        happy: "gelukkig",
        new: "nuwe",
        year: "jaar"
    },

    Zulu : {
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
// lang = lang.map(function(x){ return x.toLowerCase() });


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
    stringBuilder(language);
    let speechLang = "";    
    let msg = new SpeechSynthesisUtterance();
    msg.text = translation;
    if (language === 'French') {
        speechLang = 'fr-FR';
    } else if (language === 'Afrikans') {
        speechLang = 'af-ZA	';
    } else if (language === 'Zulu') {
        speechLang = 'zu-ZA	';
    } else {
        speechLang = 'en-US';
    }
    msg.lang = speechLang;  
    speechSynthesis.speak(msg);
};        

const stringBuilder = (language) => {
    let newString = '';
        if (translation.includes(undefined)) {
            newString = "Undefined words have been entered.";
        } else {
            newString = `Your translation in ${language} is ${translation.join(" ")}.`;
        }
    printToDom(newString, "translate__div");
};


buttons.addEventListener("click", translator,);