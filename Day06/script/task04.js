var body = document.getElementsByTagName('body')[0];
var footer = document.getElementsByTagName('footer')[0].getElementsByTagName('div')[0];
var select = document.getElementsByTagName('select')[0];
var up = footer.getElementsByTagName('button')[0];
var down = footer.getElementsByTagName('button')[1];
var defaultFontSize = 16;
var sizeUp= up.addEventListener('click', function(){
    defaultFontSize++;
    body.style.fontSize = defaultFontSize + 'px';    
});

var sizeDown = down.addEventListener('click', function(){
    defaultFontSize--;
    body.style.fontSize = defaultFontSize + 'px';    
});


var chnageColor = select.addEventListener('change', function(){
    newColor = select.value;
    body.style.backgroundColor = newColor;
})