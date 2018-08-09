/// <reference path="phaser.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Preload = (function (_super) {
    __extends(Preload, _super);
    function Preload() {
        _super.call(this);
    }
    Preload.prototype.preload = function () {
    };
    Preload.prototype.create = function () {
        console.log("* --------------------------- create preload *");
        this.game.state.start("_Main");
    };
    Preload.prototype.fileComplete = function (progress, totalLoaded, totalFiles) {
        //   console.log(progress + '%');
    };
    return Preload;
}(Phaser.State));
