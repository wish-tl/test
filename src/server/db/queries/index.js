const knex = require("../connection");

function getAll() {
    return knex("customs").select("*");
}

function getPriceByCode(code) {
    return knex("prices")
        .select("*")
        .where({ id: parseInt(code) });
}

function addPrice(movie) {
    return knex("prices").insert(movie); // 返回 [id]
}

function updatePrice(code, movie) {
    return knex("movies")
        .update(movie)
        .where({ id: parseInt(code) });
}

module.exports = {
    getAll,
    getPriceByCode,
    addPrice,
    updatePrice,
};