//the upper text in display
const previousText = document.getElementById("previousText");
//the lower text in display
const currentText = document.getElementById("currentText");

//This function will clear all the numbers in display
function allClear() {
    previousText.innerHTML = '';
    currentText.innerHTML = '';
}

//works like backspace and delete the number in currentText
function del() {
    //if current Text is empty it will shift the previous text in current text
    if (currentText.innerHTML == '') {
        currentText.innerHTML = previousText.innerHTML;
        previousText.innerHTML = '';
    };
    //this will delete the last number
    currentText.innerHTML = currentText.innerHTML.slice(0, -1);
}


//this will work when equals is pressed and compute the math
function calculate() {
    //this if will make sure you dont try to compute with empty currentText or previousText
    if (currentText.innerHTML == '') return;
    if (previousText.innerHTML == '') return;

    //slice is added so that it does not take the mathematical symbol
    let num1 = parseFloat(previousText.innerHTML.slice(0, -1));
    let num2 = parseFloat(currentText.innerHTML);

    //computing for all math
    switch (previousText.innerHTML.slice(-1)) {
        case '*':
            previousText.innerHTML = previousText.innerHTML + currentText.innerHTML;
            currentText.innerHTML = (num1 * num2).toString();
            break;

        case '+':
            previousText.innerHTML = previousText.innerHTML + currentText.innerHTML;
            currentText.innerHTML = (num1 + num2).toString();
            break;

        case '-':
            previousText.innerHTML = previousText.innerHTML + currentText.innerHTML;
            currentText.innerHTML = (num1 - num2).toString();
            break;

        case '÷':
            previousText.innerHTML = previousText.innerHTML + currentText.innerHTML;
            currentText.innerHTML = (num1 / num2).toString();
            break;

        default:
            return;
    }

}

//it will append the number when button is pressed
function append(buttonText) {
    //it will return if currentText already has a decimal
    if (buttonText == '.' && currentText.innerHTML.includes('.')) return;
    //this will append the text
    currentText.innerHTML += buttonText;
}

//This function will work when we keep press operation without pressing equals or after pressing equals
function operation(mathsymbol) {
    //It will return if there is no number in display
    if (currentText.innerHTML == '' && previousText.innerHTML == '') return;

    //this will work if currentText is empty and you press operation so it will change the operation in previousText
    if (previousText.innerHTML != '' && currentText.innerHTML == '') {
        console.log('pass')
        previousText.innerHTML = previousText.innerHTML.slice(0, -1) + mathsymbol;
    }
    else {
        //this will execute if previousText is empty else it will compute the previousText and currentText
        if (previousText.innerHTML == '') {
            previousText.innerHTML = currentText.innerHTML + mathsymbol;
            currentText.innerHTML = '';
        } else {
            let num1 = parseFloat(previousText.innerHTML.slice(0, -1));
            let num2 = parseFloat(currentText.innerHTML);

            switch (previousText.innerHTML.slice(-1)) {
                case '*':
                    previousText.innerHTML = (num1 * num2).toString() + mathsymbol;
                    currentText.innerHTML = '';
                    break;

                case '+':
                    previousText.innerHTML = (num1 + num2).toString() + mathsymbol;
                    currentText.innerHTML = '';
                    break;

                case '-':
                    previousText.innerHTML = (num1 - num2).toString() + mathsymbol;
                    currentText.innerHTML = '';
                    break;

                case '÷':
                    previousText.innerHTML = (num1 / num2).toString() + mathsymbol;
                    currentText.innerHTML = '';
                    break;

                //default will work if you try to press operation after pressing equals
                default:
                    previousText.innerHTML = currentText.innerHTML + mathsymbol;
                    currentText.innerHTML = '';
            }
        }
    }
}