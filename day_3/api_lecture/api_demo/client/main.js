const form = document.querySelector("form")
const URL = "http://localhost:4000"

const getPokemon = evt => {
    evt.preventDefault()
    const input = document.querySelector('input')
    console.log(input.value)
    let pokemon = input.value

    axios.get(`${URL}/pokemon/${pokemon}`)
        .then(response => {
        // let pokemon = response.data
        // console.log(pokemon)
        // let {sprites} = pokemon
        // console.log(sprites)
        // let {front_default} = sprites
        let {front_default} = response.data.sprites
        console.log(front_default)
        let pokemonSprite = document.createElement('img')
        pokemonSprite.src = front_default
        document.querySelector('body').appendChild(pokemonSprite)
        })
        .catch(err => console.log(err))
}

form.addEventListener("submit", getPokemon)

