/// <reference path="phaser.d.ts"/>


var Me:any;
class Main extends Phaser.State {  


constructor() {            super();        }                   
preload() {
this.game.time.advancedTiming = true;

}

create () {  
console.log("* --------------------------- create Main *");

}render()
{
    var FPS:string = (this.game.time.fps).toString();

    this.game.debug.text(FPS || '--', 2, 14, "#00ff00");   


}


}
 