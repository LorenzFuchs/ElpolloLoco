class MovableObject extends DrawableObject {
  
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    energy_chicken = 100;
    lastHit = 0;
    energy_objects = 0;
    statusBarBottles = new Statusbar_Bottles;
  
    
    

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if(this instanceof ThrowableObject ) {             // Throwableobject sollte immer fallen
            return true;
        } else {
        return this.y < 130;
        }
    }



    

    


    //character.isColliding(chicken);
    isColliding(mo){
        return this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y + mo.height &&
        this.y + this.height > mo.y + mo.height;
        
    }

    makeChickenDead(mo){
        
        return this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y + mo.height &&
        this.y + this.height < mo.y + mo.height;
        
    } 

    

    hit() {
        this.energy -= 5;
        
        if(this.energy < 0){
            this.energy = 0;
        }else {
            this.lastHit = new Date().getTime();                                //new Date().getTime() ==> so speichert man immer Zeit in Zahlenform / Millisikunden seit 1.1.1970
        }
        
    }

    



    hit_objects() {
        this.energy_objects += 20;
        console.log(this.energy_objects);
        
        
        
        
    }


    ishurt() {
        let timepassed = new Date().getTime() - this.lastHit;                      // Differenz in Millisekunden
        timepassed = timepassed / 1000;                                         // Umwandlung in Sekunden
        return timepassed < 1;
    }

    

   

    isDead() {
    
        return this.energy == 0;                                                    //return gibt den Wert true oder false zurück ==> isDead() true or false
    }

    

    



    playAnimation(images) {
        let i = this.currentImage % images.length;  // let i = 0 % 6 ==> i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5 usw.
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
        

    }

    moveLeft() {
        
            this.x -= this.speed;
            

    }

    jump() {
        this.speedY = 30;
    }


}

