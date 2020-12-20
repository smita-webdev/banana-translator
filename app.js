//Selectors
const btnTranslate = document.querySelector("#btn-translate");
const inputTxt = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#txt-output");

//Event listeners
btnTranslate.addEventListener("click", clickHandler);

//Functions
let serverURL = "https://api.funtranslations.com/translate/minion.json";

function createURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Oops something went wrong!");
}

function clickHandler() {

    let content = inputTxt.value;

    //making call to server
    fetch(createURL(content))
        .then(response => response.json())
        .then(json => {
            outputDiv.innerText = json.contents.translated;

        })
        .catch(errorHandler);
};