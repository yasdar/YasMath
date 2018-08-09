/// <reference path="phaser.d.ts"/>
/// <reference path="Boot.ts" />
/// <reference path="preload.ts" />
/// <reference path="Main.ts" />
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(1200, 800, Phaser.AUTO, 'gameCanvas', { preload: this.preload, create: this.create }, false);
    }
    SimpleGame.prototype.preload = function () {
    };
    SimpleGame.prototype.create = function () {
        console.log("app create");
        this.game.state.add("_Boot", Boot);
        this.game.state.add("_Preload", Preload);
        this.game.state.add("_Main", Main);
        this.game.state.start("_Boot");
    };
    return SimpleGame;
}());
