const Turn = require('./Turn');

class Round {
  constructor(deck, turns = 0, incorrectGuesses = []) {
    this.deck = deck;
    this.turns = turns;
    this.incorrectGuesses = incorrectGuesses;
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard);
    this.turns++;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card.id);
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const turns = this.turns;
    const incorrect = this.incorrectGuesses.length;
    return Math.ceil(((turns - incorrect) / turns) * 100);
  }

  endRound() {
    const percent = this.calculatePercentCorrect();
    console.log(
      `** Round over! ** You answered ${percent}% of the questions correctly!`
    );
  }
}

module.exports = Round;
