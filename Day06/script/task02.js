var dialog = document.getElementsByTagName('footer')[0].getElementsByTagName('div')[0].addEventListener('click', function () {
    var inputName = window.prompt("What is your name?");
    while (inputName == "") {
        inputName = window.prompt("What is your name?");
    }
    if (inputName === null) {
        return;
    }
    var confirmation = confirm(`are sure that ${inputName} is your name?`)
    if (confirmation) {
        alert(`Hello ${inputName} !`);
        this.innerHTML = `Hello ${inputName} !`;
    }
});