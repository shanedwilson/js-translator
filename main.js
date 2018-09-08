const french = {
    	merry: "joyeux",
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

const frenchButton = document.getElementById("french__button");
const afrikansButton = document.getElementById("afrikans__button");
const zuluButton = document.getElementById("zulu__button");

let frenchKeys = Object.keys(french);
let frenchWords = Object.values(french);

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
  };

const toFrench = () => {
    let inputText = document.getElementById("input__field").value;
    let inputArray = inputText.split(' ');
    let frenchGreeting = ''
    for (var i = 0; i < frenchWords.length; i++) {
        for (var j = 0; j < inputArray.length; j++) {
            if (frenchKeys[i] === inputArray[j]) {
                frenchGreeting += `${frenchWords[i]} `;
            }
            printToDom(frenchGreeting, "translate__div");
         }
    }
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

