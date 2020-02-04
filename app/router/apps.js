import AppController from '../controller/apps';
import ErrorHandler from '../util/error_handler';

module.exports = (app) => {
    app.get('/apps', async (req, res) => {
        try {
            res.json(await AppController.query(req.query));
        } catch (e) {
            ErrorHandler(res, e);
        }
    });

    app.post('/apps', async (req, res) => {
        try {
            res.json(await AppController.create(req.query));
        } catch (e) {
            ErrorHandler(res, e);
        }
    });

    app.get('/apps/:id', async (req, res) => {
        try {
            res.json(await AppController.find(req.query));
        } catch (e) {
            ErrorHandler(res, e);
        }
    });

    app.put('/apps/:id', async (req, res) => {
        try {
            res.json(await AppController.update(req.query));
        } catch (e) {
            ErrorHandler(res, e);
        }
    });

    app.delete('/apps/:id',async (req, res) => {
        try {
            res.json(await AppController.delete(req.query));
        } catch (e) {
            ErrorHandler(res, e);
        }
    });
}