const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  })

  it('should keep track of the current round', () => {
    game.currentRound
    expect(game.currentRound).to.equal(null)
  })

  it('should create a new Round using the Deck', () => {
    game.start();
    const currentDeck = game.currentRound.deck

    expect(currentDeck.cards[0]).to.be.an.instanceof(Card)
    expect(currentDeck).to.be.an.instanceof(Deck)
    expect(currentDeck.cards.length).to.equal(prototypeQuestions.length)
  })

  it('should invoke printMessage to display the message on the CLI', () => {
    game.start();
    
  })

  it.skip('should invoke printQuestion to allow interaction via the CLI', () => {

  })


})
