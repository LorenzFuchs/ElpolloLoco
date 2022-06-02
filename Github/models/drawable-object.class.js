class DrawableObject {
    x = 120;
    y = 330;
    height = 100;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();  // this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx){
        if(this instanceof Character || this instanceof Chicken || this instanceof Chick || this instanceof Coins || this instanceof Bottles || this instanceof Endboss || this instanceof ThrowableObject){                            //der Befehl instanceof wählt gewisse Elemente aus, für die die Funktion gelten soll
        ctx.beginPath();                                                                     //in diesem Fall für Character und Chicken
        
        ctx.stroke();
        }
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }

}