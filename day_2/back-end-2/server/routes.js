const {getHouses, createHouse, updateHouse, deleteHouse} = require("./controller.js")

module.exports = (app) => {
    app.route("/api/houses").get(getHouses).post(createHouse)
    app.route("/api/houses/:id").put(updateHouse).delete(deleteHouse)
}