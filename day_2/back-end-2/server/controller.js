const houses = require("./db.json")
let base_id = 4
module.exports = {
    getHouses: (request, response) => {
        response.status(200).send(houses)
    },
    createHouse: (request, response) => {
        let {address, price, imageURL} = request.body
        let new_house = {
            id: base_id,
            address,
            price,
            imageURL
        }
        houses.push(new_house)
        base_id++
        console.log(houses)
        response.status(200).send(houses)
    },
    updateHouse: (request, response) => {
        let {id} = request.params
        let {type} = request.body
        let index = houses.findIndex(house => house.id === +id)

        if (houses[index].price < 10000 && type === "minus") {
            console.log("cant do that");
            response.status(405).send(houses)
            return;
        }
        type === "plus" ? houses[index].price = Number(houses[index].price) + 10000 : houses[index].price -= 10000;
        response.status(200).send(houses)
    }, 
    deleteHouse: (request, response) => {
        let index = houses.findIndex(house => house.id === +request.params.id)
        houses.splice(index, 1)
        response.status(200).send(houses)
    }
}
