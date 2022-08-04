const { getPokemon } = require('../controllers/controller.js')


module.exports = (app) =>{
    app.get('/pokemon/:pokemon', getPokemon)
}