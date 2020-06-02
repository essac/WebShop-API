const express = require('express');
const promoTypesController = require('../controllers/promoTypesController');

const routes = () => {
    const promoTypeRouter = express.Router();
    const controller = promoTypesController();

    promoTypeRouter.route('/promotypes')
        .get(controller.get)
        .post(controller.post);

    promoTypeRouter.route('/promotype/:Id')
        .get(controller.get)
        .put(controller.put)
        .delete(controller.remove);

    return promoTypeRouter;
};

module.exports = routes;