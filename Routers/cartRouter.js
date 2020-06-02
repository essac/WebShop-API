const express = require('express');
const cartController = require('../controllers/cartController');

const routes = () => {
    const cartRouter = express.Router();
    const controller = cartController();

    cartRouter.route('/cartproducts')
        .get(controller.get)
        .post(controller.post)
        .put(controller.put)
        .delete(controller.remove);
    
    cartRouter.route('/CartProductsByCustomerId')
        .get(controller.get)

    return cartRouter;
};

module.exports = routes;