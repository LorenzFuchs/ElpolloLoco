class Coins extends MovableObject {
   
    
    
    IMAGE = 'img/8.Coin/Moneda2.png';
        

    constructor() {
        super().loadImage(this.IMAGE);

        this.x = 200 + Math.random() * 1960;          // Zufällige Zahl zwischen 200 und 700 für die X-Koordinate
        this.y = 60 + Math.random() * 90 ;
        
    }

    
    
}