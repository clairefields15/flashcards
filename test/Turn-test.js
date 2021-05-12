const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function () {
  let card;
  let turn;

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card)
  })

  it('should be a function', function() {
    const turn = new Turn()
    expect(Turn).to.be.a('function')
  })

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should store a guess and a Card object', function() {
    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.equal(card);
  })

  it('should return the guess', function() {
    const takeTurn = turn.returnGuess();
    expect(takeTurn).to.equal('pug')
  })

  it('should return the card object', function() {
    const returnCard = turn.returnCard();
    expect(returnCard).to.equal(card)
  })

  it('should evaluate the guess', function() {
    const evaluate = turn.evaluateGuess();
    expect(evaluate).to.equal(false)
    turn = new Turn('sea otter', card); 
    const evaluate2 = turn.evaluateGuess();
    expect(evaluate2).to.equal(true)
  })

  it('should return incorrect if false', function() {
    const turn = new Turn('pug', card);
    const feedback = turn.giveFeedback();
    expect(feedback).to.equal('Incorrect!')
  })

  it('should return correct if true', function() {
    const turn2 = new Turn('sea otter', card); 
    const feedback2 = turn2.giveFeedback()
    expect(feedback2).to.equal('Correct!')
  })

});