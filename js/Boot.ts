/// <reference path="phaser.d.ts"/>
class Boot extends Phaser.State {  
constructor() {            super();        } 
preload() {
//load the loader : stars

}    
create() {
console.log(" - Boot create -");  

this.game.renderer.renderSession.roundPixels = true;
this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
this.game.scale.parentIsWindow = true;
this.game.scale.refresh();
//this.game.scale.windowConstraints.bottom = 'visual';
this.game.state.start("_Preload");
}


}

