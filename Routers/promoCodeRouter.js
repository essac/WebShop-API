const express = require('express');
const promoCodesController = require('../controllers/promoCodesController');

const routes = () => {
    const promoCodeRouter = express.Router();
    const controller = promoCodesController();

    promoCodeRouter.route('/promocodes')
        .get(controller.get)
        .post(controller.post);

    promoCodeRouter.route('/promocodes/:Id')
        .get(controller.get)
        .put(controller.put)
        .delete(controller.remove);

    return promoCodeRouter;
};

module.exports = routes;