/// <reference path="phaser.d.ts"/>


class Preload extends Phaser.State {  


constructor() {            super();        }                   
preload() {




}
create() {  
console.log("* --------------------------- create preload *")   
this.game.state.start("_Main");

}
fileComplete(progress, totalLoaded, totalFiles) {
 //   console.log(progress + '%');
    
}


}



