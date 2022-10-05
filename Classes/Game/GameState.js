import {Stack} from 'clownup/AbstractDataTypes/Stack.js'
import { GamePhase } from './GamePhase.js'
class GameState {
  constructor () {
    this.effectStack = new Stack();
    this.currentPhase = GamePhase.TurnStart;
  }

  startEffectStack() {
    for (i = 0; i<this.effectStack.tail; i++){
      
    }
  }

  endTurn() {
    
  }


}