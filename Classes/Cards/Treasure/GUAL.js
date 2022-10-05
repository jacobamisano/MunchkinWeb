import { Treasure } from './Treasure.js'
import { CardEffect } from '../CardEffect.js'
import { EffectType } from '../CardEffect.js';
class GUAL extends Treasure{
  constructor(name, isPlayable, description, levelNum){
    super(name, isPlayable, description);
    this.effect = new CardEffect(levelNum, EffectType.AddLevel);
  }
}