let canvas;
let world;
let keyboard = new Keyboard();
let THROW_REQUEST_STOP = new Date().getTime();
let THROW_REQUEST_START = 0;


function startFullscreen() {
    canvas.requestFullscreen();
}

function init() {
    document.getElementById('canvas').style.background = 'none';
    document.getElementById('fullScreen').classList.remove('d-none');
    document.getElementById('pulse').classList.add('d-none');
    document.getElementById('startButton').style.marginTop = '0';
    document.getElementById('controlPanel').classList.add('d-none');
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    touchCursors();
    console.log('My Character is', world.character);                                     //man kann auch world['character'] schreiben um auf das JSON zuzugreifen!!
}




window.addEventListener("keydown", (e) => {                                              // keydown bedeutet Taste ist gedrückt
    if(e.keyCode == 39) {                                                                // die Zahlen 32, 37, 38, 39, 40 sind die Keycode zahlen aus der Konsole ausgelesen; Jede Taste hat eine bestimmte Nummer den "keycode"
        keyboard.RIGHT = true;
    }
    if(e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if(e.keyCode == 38) {
        keyboard.UP = true;
    }
    if(e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if(e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if(e.keyCode == 68) {
        
        if(THROW_REQUEST_STOP > THROW_REQUEST_START && !keyboard.D) {
            if((new Date().getTime() - THROW_REQUEST_START) > 1000){
                THROW_REQUEST_START = new Date().getTime();
            }
            keyboard.D = true;
        }
        
        
        
        
    
        
    }
    //console.log(e);
});

window.addEventListener("keyup", (e) => {                                             //keyup bedeutet Taste wird losgelassen
    if(e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if(e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if(e.keyCode == 38) {
        keyboard.UP = false;
    }
    if(e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if(e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if(e.keyCode == 68) {
        THROW_REQUEST_STOP = new Date().getTime();
        keyboard.D = false;
    }
    //console.log(e);
});


function touchCursors(){
document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.LEFT = true;

});

document.getElementById('btnLeft').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.LEFT = false;

});

document.getElementById('btnRight').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;

});

document.getElementById('btnRight').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;

});

document.getElementById('btnRight').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;

});

document.getElementById('btnUp').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.SPACE = true;

});

document.getElementById('btnUp').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.SPACE = false;

});

document.getElementById('btnThrow').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.D = true;

});

document.getElementById('btnThrow').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.D = false;

});
}
