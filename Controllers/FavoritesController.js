const db = require('../db');

favoritesController = () => {
    get = async (req, res) => {
        try {
            const records = await db.get(req, res);

            if (records.length == 0) {
                res.status(404);
                return res.send('Could not find the resource.');
            };

            return res.json(records);
        } catch (err) {
            return res.status(404);
        };
    };

    post = async (req, res) => {
        try {
            return await db.modify(req, res);
        } catch (err) {
            res.status(500);
            return res.send('Unable to create.');
        }
    };

    remove = async (req, res) => {
        try {
            await db.modify(req, res);
        } catch (err) {
            console.log(err);
            res.status(500);
            return res.send('Unable to Delete.');
        }
    };

    return {
        get,
        post,
        put,
        remove
    };
};

module.exports = favoritesController;