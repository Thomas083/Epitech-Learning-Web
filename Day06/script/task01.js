var count = 0
var button = document.getElementsByTagName('footer')[0].getElementsByTagName('div')[0].addEventListener('click', function() {
    count++    
    this.innerHTML = count;
});