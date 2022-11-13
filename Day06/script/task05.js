var draw = document.getElementsByTagName('canvas')[0];

if (draw.getContext) {
    const ctx = draw.getContext('2d');
    ctx.beginPath()
    ctx.moveTo(6, 6);
    ctx.lineTo(14, 10);
    ctx.lineTo(6, 14);
    ctx.fillStyle = 'white'
    ctx.fill()
    ctx.closePath()
    ctx.stroke();

    ctx.lineWidth = 1
    ctx.strokeStyle = 'white'
    ctx.stroke()
}

const audio = new Audio("https://file-examples.com/storage/fe783a5cbb6323602a28c66/2017/11/file_example_MP3_700KB.mp3")

var play = document.getElementsByTagName('footer')[0].getElementsByTagName('div')[0].getElementsByTagName('canvas')[0].addEventListener('click', function(){
    audio.play();
});

var pause = document.getElementsByTagName('footer')[0].getElementsByTagName('div')[1].getElementsByTagName('button')[0].addEventListener('click', function(){
    audio.pause();
});

var stop = document.getElementsByTagName('footer')[0].getElementsByTagName('div')[1].getElementsByTagName('button')[1].addEventListener('click', function(){
    audio.pause();
    audio.currentTime = 0;
});

var mute = document.getElementsByTagName('footer')[0].getElementsByTagName('div')[1].getElementsByTagName('button')[2].addEventListener('click', function(){
    if (audio.muted != true) {
        audio.muted = true;
    } else {
        audio.muted = false;
    }
    
});