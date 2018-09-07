const french = {
    	merry: "joyeux",
		xmas: "Noël",
		and: "et",
		happy: "content",
		new: "Nouveau",
		year: "an"
};

const afrikans = {
    merry: "vrolik",
    xmas: "Kersfees",
    and: "en",
    happy: "gelukkig",
    new: "nuwe",
    year: "jaar"
};

const zulu = {
    merry: "ujabule",
    xmas: "i-christmas",
    and: "futhi",
    happy: "ujabule",
    new: "okusha",
    year: "ngonyaka"
};

let frenchButton = document.getElementById("french__button");
let afrikansButton = document.getElementById("afrikans__button");
let zuluButton = document.getElementById("zulu__button");

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
  };

const toFrench = () => {
    let inputText = document.getElementById("input__field").value;
    printToDom(inputText, "translate__div");
};

const toAfrikans = () => {
    let inputText = document.getElementById("input__field").value;
    printToDom(inputText, "translate__div");
};

const toZulu = () => {
    let inputText = document.getElementById("input__field").value;
    printToDom(inputText, "translate__div");
};

frenchButton.addEventListener("click", toFrench);
afrikansButton.addEventListener("click", toAfrikans);
zuluButton.addEventListener("click", toZulu);


