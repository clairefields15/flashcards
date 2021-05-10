const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function () {

  it('should be a function', function() {
    const turn = new Turn()
    expect(Turn).to.be.a('function')
  })

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should store a guess and a Card object', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);  
        
    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.equal(card);
  })

  it('should return the guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card); 

    const takeTurn = turn.returnGuess();

    expect(takeTurn).to.equal('pug')
  })

  it('should return the card object', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card); 

    const returnCard = turn.returnCard();

    expect(returnCard).to.equal(card)
  })

});