const express = require('express');
const basicCartController = require('../controllers/basicCartController');

const routes = () => {
    const basicCartRouter = express.Router();
    const controller = basicCartController();

    basicCartRouter.route('/basicCarts')
        .get(controller.get);

    return basicCartRouter;
};

module.exports = routes;