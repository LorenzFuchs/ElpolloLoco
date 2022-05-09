let canvas;
let world;
let keyboard = new Keyboard();

function startFullscreen() {
    canvas.requestFullscreen();
}

function init() {
    document.getElementById('canvas').style.background = 'none';
    document.getElementById('fullScreen').classList.remove('d-none');
    document.getElementById('pulse').classList.add('d-none');
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    
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
        keyboard.D = true;
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
        keyboard.D = false;
    }
    //console.log(e);
});