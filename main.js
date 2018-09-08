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

// const randomButton = () => {
//     let randomize = Math.floor((Math.random() * buttonArray.length) + 1);
//     let randomId = randomize
        
    
// }; 

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const translator = () => {
    translation = [];
    let randomize = Math.floor((Math.random() * buttonArray.length) + 1);
    let language = event.target.id;
    if (event.target.id = "random") {
        language = languages[randomize];
    } else {
    let inputText = document.getElementById("input__field").value;
    inputText = inputText.toLowerCase();
    let inputArray = inputText.split(' ');
        for (var i = 0; i < inputArray.length; i++) {
                translation.push(languages[language][inputArray[i]]);
            }  
        stringBuilder();
    };        
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

// const randomButton = () => {
//     let randomize = Math.floor((Math.random() * buttonArray.length) + 1);
//     let randomId = 
        
    
// };    

buttons.addEventListener("click", translator);