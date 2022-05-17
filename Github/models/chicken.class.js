class Chicken extends MovableObject {
    y = 350;
    height = 80;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'

    ];

    IMAGES_DEAD = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png',
    ];

    
    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');

        this.x = 600 + Math.random() * 1200;          // Zufällige Zahl zwischen 200 und 700 für die X-Koordinate
        this.speed = 0.15 + Math.random() * 0.25 ;   // Math.random ist eine zufällige Zahl zwischen 0 und 1;
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        

        setInterval(() => {
            if(this.isDead ()){
                this.playAnimation(this.IMAGES_DEAD);
                
               
            }else
            this.playAnimation(this.IMAGES_WALKING );
        }, 200);
       
    }
    
}