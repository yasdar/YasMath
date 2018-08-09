/// <reference path="phaser.d.ts"/>
/// <reference path="app.ts"/>
/// <reference path="Boot.ts"/>
/// <reference path="preload.ts"/>
/// <reference path="YasMath.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Me;
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
    }
    Main.prototype.preload = function () {
        this.game.time.advancedTiming = true;
    };
    Main.prototype.create = function () {
        console.log("* --------------------------- create Main *");
    };
    Main.prototype.render = function () {
        var FPS = (this.game.time.fps).toString();
        this.game.debug.text(FPS || '--', 2, 14, "#00ff00");
    };
    return Main;
}(Phaser.State));
