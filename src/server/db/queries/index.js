const knex = require("../connection");

function getAll() {
    return knex("customs").select("*");
}

function getCustomByCode(custom_code) {
    return knex("customs")
        .select("*")
        .where({ custom_code });
}

function getPriceByCode(custom_code) {
    return knex("prices")
        .select("*")
        .where({ custom_code });
}

function save(custom_code, data) {
    return knex.transaction(function (trx) {

        knex('customs')
            .where({
                custom_code
            })
            .del()
            .transacting(trx)
            .then(function () {
                return knex('prices')
                    .where({
                        custom_code
                    })
                    .del()
                    .transacting(trx)
            })
            .then(function () {
                return knex('customs').insert(data.custom).transacting(trx)
            })
            .then(function () {
                return knex('prices').insert(data.list).transacting(trx)
            })
            .then(trx.commit)
            .catch(trx.rollback);
    })

}

function addPrice(list) {
    return knex("prices").insert(list); // 返回 [id]
}

function updatePrice(custom_code, list) {
    return knex("prices")
        .update(list)
        .where({ custom_code });
}

module.exports = {
    getAll,
    getCustomByCode,
    getPriceByCode,
    save,
    addPrice,
    updatePrice,
};