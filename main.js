const french = {
    merry: "Joyeux",
	christmas: "Noël",
	and: "et",
	happy: "content",
	new: "Nouveau",
};

const afrikans = {
    merry: "Vrolik",
    christmas: "Kersfees",
    and: "en",
    happy: "gelukkig",
    new: "nuwe",
    year: "jaar"
};

const zulu = {
    merry: "Ujabule",
    christmas: "Christmas",
    and: "futhi",
    happy: "ujabule",
    new: "okusha",
    year: "ngonyaka"
};

// const frenchButton = document.getElementById("french__button");
// const afrikansButton = document.getElementById("afrikans__button");
// const zuluButton = document.getElementById("zulu__button");
let languageButton = document.getElementById('button__div')
let translation = [];

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
  };

const translator = () => {
    translation = [];
    let inputText = document.getElementById("input__field").value;
    inputText = inputText.toLowerCase();
    let inputArray = inputText.split(' ');
        for (var i = 0; i < inputArray.length; i++) {
                translation.push(language[inputArray[i]]);
            }  
        stringBuilder();
    };

// const toAfrikans = () => {
//     translation = [];
//     let inputText = document.getElementById("input__field").value;
//     inputText = inputText.toLowerCase();
//     let inputArray = inputText.split(' ');
//         for (var i = 0; i < inputArray.length; i++) {
//             translation.push(afrikans[inputArray[i]]);
//             }  
//         stringBuilder();
//     };
    
// const toZulu = () => {
//     translation = [];
//     let inputText = document.getElementById("input__field").value;
//     inputText = inputText.toLowerCase();
//     let inputArray = inputText.split(' ');
//         for (var i = 0; i < inputArray.length; i++) {
//             translation.push(zulu[inputArray[i]]);
//             }  
//         stringBuilder();
//         };   

const stringBuilder = () => {
    let newString = '';
        if (translation.includes(undefined)) {
            newString = "Undefined words have been entered";
        } else {
            newString = `Your translation is ${translation.join(" ")}.`;
        }
        printToDom(newString, "translate__div");
    };

frenchButton.addEventListener("click", translator);
// afrikansButton.addEventListener("click", toAfrikans);
// zuluButton.addEventListener("click", toZulu);