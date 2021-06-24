const previousText = document.getElementById("previousText");
const currentText = document.getElementById("currentText");


function allClear() {
    this.previousText.innerHTML = '';
    this.currentText.innerHTML = '';
}

function del() {
    if (currentText.innerHTML == '') return;
    this.currentText.innerHTML = this.currentText.innerHTML.slice(0, -1);
}
