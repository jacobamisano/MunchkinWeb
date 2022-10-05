export const GamePhase = {
  /*
    Turns begin with drawing a door card face up(Kicking down the door)
  */
  TurnStart: 'TurnStart',

  // Specific to monster encounters : 
  Encounter: 'Encounter',
  CalculateStats: 'CalculateStats', // Possibly phase to play boosts
  CompareStats: 'CompareStats'
}