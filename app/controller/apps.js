const {App} = require('../models')

module.exports = {
    async create(body) {
        const app = await App.create(body)
        return app;
    },

    update(id, app) {
        //Todo update
    },

    find(id, app) {
        //Todo find
    },

    query(params) {
        //Todo query
    },

    delete(id) {
        //Todo delete
    }
}