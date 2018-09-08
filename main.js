const french = {
    merry: "Joyeux",
	christmas: "Noël",
	and: "et",
	happy: "content",
	new: "Nouveau",
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

const frenchButton = document.getElementById("french__button");
const afrikansButton = document.getElementById("afrikans__button");
const zuluButton = document.getElementById("zulu__button");

let translation = [];


const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
  };

const toFrench = () => {
    translation = [];
    let inputText = document.getElementById("input__field").value;
    inputText = inputText.toLowerCase();
    let inputArray = inputText.split(' ');
        for (var i = 0; i < inputArray.length; i++) {
                translation.push(french[inputArray[i]]);
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

// const toAfrikans = () => {
//     let inputText = document.getElementById("input__field").value;
//     printToDom(inputText, "translate__div");
// };

// const toZulu = () => {
//     let inputText = document.getElementById("input__field").value;
//     printToDom(inputText, "translate__div");
// };

frenchButton.addEventListener("click", toFrench);
// afrikansButton.addEventListener("click", toAfrikans);
// zuluButton.addEventListener("click", toZulu);

