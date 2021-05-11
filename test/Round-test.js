const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })
  
  it('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function')
  });

  it('should instantiate a new Round',() => {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round)
  })

  it('should be played with a deck', () => {
    expect(round.deck).to.deep.equal(deck)
  })

  it('should return the first card in the deck', () =>{
    const currentCard = round.returnCurrentCard();
    expect(currentCard).to.equal(card1)
  })


})