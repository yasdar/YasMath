var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="phaser.d.ts"/>
var Boot = (function (_super) {
    __extends(Boot, _super);
    function Boot() {
        _super.call(this);
    }
    Boot.prototype.preload = function () {
        //load the loader : stars
    };
    Boot.prototype.create = function () {
        console.log(" - Boot create -");
        this.game.renderer.renderSession.roundPixels = true;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.parentIsWindow = true;
        this.game.scale.refresh();
        //this.game.scale.windowConstraints.bottom = 'visual';
        this.game.state.start("_Preload");
    };
    return Boot;
}(Phaser.State));
