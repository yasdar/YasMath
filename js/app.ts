/// <reference path="phaser.d.ts"/>
/// <reference path="Boot.ts" />
/// <reference path="preload.ts" />
/// <reference path="Main.ts" />

class SimpleGame {

    constructor() {
      this.game = new Phaser.Game(1200,800, Phaser.AUTO, 'gameCanvas', { preload: this.preload, create: this.create },false);
       
    }


   


    game: Phaser.Game;

    preload() {

    }

    create() {
        
        console.log("app create");

        this.game.state.add("_Boot",Boot);
        this.game.state.add("_Preload",Preload);
        this.game.state.add("_Main",Main);

        this.game.state.start("_Boot");
        
    }
    
}

