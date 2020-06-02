const express = require('express');
const ordersRowController = require('../controllers/orderRowsController');

const routes = () => {
    const orderRowRouter = express.Router();
    const controller = orderRowsController();

    orderRowRouter.route('/orderRows')
        .get(controller.get)
        .post(controller.post);

    orderRowRouter.route('/orderRows/:Id')
        .get(controller.get)
        .put(controller.put)
        .delete(controller.remove);
    orderRowRouter.route('/orderRowsByOrderId')
        .get(controller.get);

    return orderRowRouter;
};

module.exports = routes;