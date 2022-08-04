//const { default: axios } = require("axios")

let btn = document.querySelector("button")

function buttonClick (event) {
    console.log("button clicked")
    if (document.querySelector('div')) {
        document.querySelector('div').remove()
    }
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then (resp1 => {
        let new_div = document.createElement("div")
        document.querySelector("body").appendChild(new_div)
        for (let resident_url of resp1.data.results[0].residents) {
            axios.get(`${resident_url}`)
            .then (resp2 => {
                let new_h2 = document.createElement("h2")
                new_h2.textContent = resp2.data.name
                new_div.appendChild(new_h2)
            
            })
            .catch(error => console.log(error))
        }
    })
    .catch(error => console.log(error))
}

btn.addEventListener("click", buttonClick)