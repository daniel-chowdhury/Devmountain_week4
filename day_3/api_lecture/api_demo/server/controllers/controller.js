const axios = require('axios')

module.exports = {
    getPokemon:(req, res) => {
        let { pokemon } = req.params
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => {
            res.status(200).send(response.data)
        })
        .catch(err => console.log(err))
    }
}