class World {
    character = new Character();
    endboss = level1.enemies[level1.enemies.length - 1];
    level = level1;
    chicken = level1.enemies;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new Statusbar();
    coins = level1.coins[level1.coins.length - 1];
    bottles = level1.bottles[level1.bottles.length - 1];
    statusBarCoins = new Statusbar_Coins;
    statusBarBottles = new Statusbar_Bottles;
    statusBarEndboss = new Statusbar_Endboss;
    game_Sound = new Audio('audio/gameMusic.mp3');
    chicken_death_sound = new Audio('audio/chicken_death.mp3');
    collect_coins_sound = new Audio('audio/collect_coins.mp3');
    collect_bottles_sound = new Audio('audio/collect_bottles.mp3');

    throwableObjects = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');                                             //alle definierten Variablen in einer Klasse, muss man in der Funktion mit this. öffnen!!
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        setInterval(() => {
            this.game_Sound.play();
        }, 100);


    }

    setWorld() {
        this.character.world = this;
    }

    run() {                                                                               // wird regelmäßig ausgeführt
        setInterval(() => {                                                              //checkt alle 200ms ob ein Gegner mit dem Character kollidiert
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.D) {
            if (this.bottles.energy_objects <= 0) {
                return false;
            }
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            if (this.bottles.energy_objects > 0) {
                this.bottles.energy_objects -= 20;
                this.statusBarBottles.setPercentage(this.bottles.energy_objects);
                console.log('Bottle', this.bottles.energy_objects);
            }
        }
    }

    checkCollisions() {
        if (this.level.bottles.length == 0 && this.endboss.energy > 0 && this.bottles.energy_objects == 0) {
            document.getElementById('gameOverScreen').classList.remove('d-none');
        }
        this.level.enemies.forEach(enemy => {                                       //checkt für jeden Gegner ob er mit dem Character kollidiert
            if (this.character.isColliding(enemy) && !this.character.makeChickenDead(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);



            } else if (!this.character.makeChickenDead(this.endboss) && this.character.makeChickenDead(enemy)) {

                enemy.energy = 0;

                let position = this.level.enemies.indexOf(enemy);
                this.level.enemies.splice(position, 1);
                console.log(enemy, 'verschwindet');
                this.chicken_death_sound.play();

            }
        });

        this.level.coins.forEach(coin => {                                       //checkt für jeden Gegner ob er mit dem Character kollidiert
            if (this.character.isColliding(coin)) {
                let position = this.level.coins.indexOf(coin);
                this.level.coins.splice(position, 1);
                this.coins.hit_objects();
                this.collect_coins_sound.play();
                this.statusBarCoins.setPercentage(this.coins.energy_objects);



            }
        });

        this.level.bottles.forEach(bottle => {                                       //checkt für jeden Gegner ob er mit dem Character kollidiert

            if (this.character.isColliding(bottle)) {
                let position = this.level.bottles.indexOf(bottle);
                this.collect_bottles_sound.play();
                this.level.bottles.splice(position, 1);
                this.bottles.hit_objects();
                this.statusBarBottles.setPercentage(this.bottles.energy_objects);




            }
        });


        this.throwableObjects.forEach(throwableObject => {                                       //checkt für jeden Gegner ob er mit dem Character kollidiert
            if (this.endboss.isColliding(throwableObject)) {
                this.endboss.hit();
                this.statusBarEndboss.setPercentage(this.endboss.energy);
                if (this.endboss.energy == 0) {
                    this.chicken_death_sound.play();
                    let position = this.level.enemies.indexOf('Endboss');
                    setTimeout(() => {
                        this.level.enemies.splice(position, 1);
                    }, 1000);

                }

            }


        });


    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);       //der Canvas Bereich wird zu Beginn bereinigt;

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        // Space for fixed objects / Statusbar fixieren.
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarBottles);
        this.addToMap(this.statusBarEndboss);
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);

        //draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {                 //da "this" in der Funktion requestAnimationFrame nicht erkannt wird, muss man vorher eine Variable definieren (Video10_El_pollo_loco)
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }


        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);                // Breite von Canvas wird abgezogen
        this.ctx.scale(-1, 1);                          // Bild wird zum Rückwärtslaufen gespiegelt
        mo.x = mo.x * -1;                                //X-Achse wird umgedreht
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


}

