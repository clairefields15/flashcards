const http = require('http');
let app = http.createServer();
const Game = require('./src/Game')

// Start the server on port 3000
app.listen(3000, '127.0.0.1');  
console.log('Node server running on port 3000'); 

//start game
const game1 = new Game();
game1.start();