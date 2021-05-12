const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card, turn;

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card)
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function')
  })

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should store a guess and a Card object', () => {
    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.equal(card);
  })

  it('should return the guess', () => {
    const takeTurn = turn.returnGuess();
    expect(takeTurn).to.equal('pug')
  })

  it('should return the card object', () => {
    const returnCard = turn.returnCard();
    expect(returnCard).to.equal(card)
  })

  it('should evaluate a correct guess to true', () => {
    turn = new Turn('sea otter', card); 
    const evaluate1 = turn.evaluateGuess();
    expect(evaluate1).to.equal(true)
  })

  it('should evaluate an incorrect guess to false', () => {
    const evaluate = turn.evaluateGuess();
    expect(evaluate).to.equal(false)
  })
    
  it('should return incorrect if guess evaluates to false', () => {
    const feedback = turn.giveFeedback();
    expect(feedback).to.equal('Incorrect!')
  })

  it('should return correct if guess evaluates to true', () => {
    turn = new Turn('sea otter', card); 
    const feedback = turn.giveFeedback()
    expect(feedback).to.equal('Correct!')
  })

});