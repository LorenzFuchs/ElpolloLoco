class BackgroundObject extends MovableObject {

    width = 720;
    height = 480;
    constructor(imagePath, x) {
        super().loadImage(imagePath);                                               //super() braucht man davor, um in der übergeordneten Klasse zuzugreifen
        this.x = x;
        this.y = 480 - this.height;
    }
}