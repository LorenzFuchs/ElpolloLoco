class Statusbar_Bottles extends DrawableObject {
    IMAGES = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',     // ==> return Bild Nummer 0 aus der Funktion resolveImageIndex();
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',    // ==> return Bild Nummer 1 aus der Funktion resolveImageIndex();
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',    // ==> return Bild Nummer 2 aus der Funktion resolveImageIndex();
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',    // ==> return Bild Nummer 3 aus der Funktion resolveImageIndex();
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',    // ==> return Bild Nummer 4 aus der Funktion resolveImageIndex();
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png',  // ==> return Bild Nummer 5 aus der Funktion resolveImageIndex();

    ];

    
    percentage = 0;

    constructor() {
        super();                                                //super() muss immer rein, sonst Fehlermeldung
        this.loadImages(this.IMAGES);
        this.x = 30;
        this.y = 100;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }

    

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];

        
    }
    resolveImageIndex(){
        if(this.percentage >= 100) {
        return 5;
        }else if(this.percentage > 80) {
            return 4;
        } else if(this.percentage > 60) {
            return 3;
        } else if(this.percentage > 40) {
            return 2;
        } else if(this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
        
    }
}