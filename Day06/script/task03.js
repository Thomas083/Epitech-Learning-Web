var cut = true
var body = document.getElementsByTagName('body')[0]
var footer = document.getElementsByTagName('footer')[0]
var div = document.getElementsByTagName('div')[2]
var count = 0

body.addEventListener('keypress', function (key) {
    if (count < 42) {
        count++
        div.innerHTML = div.innerHTML += key.key;

    }
    if (count == 42) {
        if (cut) {
            cut = false;
            div.innerHTML = div.innerHTML.substring(9, 52);
        }
        div.innerHTML = div.innerHTML.substring(1,42)
        div.innerHTML = div.innerHTML += key.key;
        count--
    }
})