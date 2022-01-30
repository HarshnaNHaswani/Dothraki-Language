const txtInput = document.querySelector("#txt-input");
const btnTranslate = document.querySelector("#btn-translate");
const divOutput = document.querySelector("#div-output");

// "https://api.funtranslations.com/translate/draconic.json"
var apiSource = "https://api.funtranslations.com/translate/dothraki.json";
function constructUrl(input){
    return apiSource + "?" + "text=" + input;
}

function errorHandler(error){
    divOutput.innerText = "error occured. try again later";
}

function clickHandler(){
    var input = txtInput.value;
    var url = constructUrl(input);
     fetch(url)
    .then(response => response.json())
    .then(json => {
        divOutput.innerText = json.contents.translated
        divOutput.style.visibility = "visible";       
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)