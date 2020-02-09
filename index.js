const express = require('express')

const app = express()

const AppController = require('./app/controller/apps')

app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    try {
        const application = await AppController.create({
            name: 'NovaXS PDV',
            description: 'Aplicação de PDV para parques'
        });
        res.json(application)
    } catch (e) {
        res.json({ message: e })
    }

})

app.listen(3000)