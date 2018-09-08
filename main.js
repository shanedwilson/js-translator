const languages = {
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
let buttonArray = document.getElementsByClassName('lanuguage__button');
let language = ''

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const buttonClick = () => {
    let randomize = Math.floor((Math.random() * buttonArray.length) + 1);
    if (event.target.id = "random") {
        language = languages[randomize];
    } else {
         language = event.target.id;
    }    
    return language;
};

const translator = () => {
    translation = [];
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

buttons.addEventListener("click", buttonClick(), translator());