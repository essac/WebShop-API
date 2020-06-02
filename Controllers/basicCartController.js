const db = require('../db');

basicCartController = () => {
    get = async (req, res) => {
        try {
            const records = await db.get(req, res);

            if (records.length == 0) {
                res.status(404);
                return res.send('Could not find the resource');
            }
            return res.json(records);

        } catch (err) {
            return res.status(404);
        }
    }

    return {
        get
    };
};

module.exports = basicCartController;