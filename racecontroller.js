// the RacersController will be responsible for drawing the racers, updating their positions and handling the start, end and resetting of the race.

//Need capitalization
import { AppState } from "./appstate.js"; //Why underlined?
console.log('Is this the AppState?', AppState) //I think this was successful

// NOTE this is just the definition (the blue print)
class RaceController{
    constructor(){
        console.log("the controller's constructor runs on page load")
    }
}

let racecontroller = new RaceController() //"new" keyword accesses the constructor

window['app'] = {controller : RaceController}
