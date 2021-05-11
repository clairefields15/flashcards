const Turn = require("./Turn");

class Round {
  constructor(deck, turns = 0, incorrectGuesses = []) {
    this.deck = deck;
    this.turns = turns;
    this.incorrectGuesses = incorrectGuesses;
  }

  returnCurrentCard() {
    return this.deck.cards[0]
  }

  takeTurn(guess) {
    this.turns++
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard)
    return turn.giveFeedback()
  }

}

module.exports = Round;