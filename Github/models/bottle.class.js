class Bottles extends MovableObject {
   y = 340;
    
    
    IMAGE = 'img/6.botella/2.Botella_enterrada2.png';
        

    constructor() {
        super().loadImage(this.IMAGE);

        this.x = 200 + Math.random() * 1960;          // Zufällige Zahl zwischen 200 und 700 für die X-Koordinate
        
        
    }

    
    
}