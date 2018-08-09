/// <reference path="phaser.d.ts"/>
/// <reference path="app.ts"/>
/// <reference path="Boot.ts"/>
/// <reference path="preload.ts"/>
/// <reference path="YasMath.ts"/>


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
 