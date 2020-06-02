const express = require('express');
const productsController = require('../controllers/productsController');

const routes = () => {
    const productRouter = express.Router();
    const controller = productsController();

    productRouter.route('/products')
        .get(controller.get)
        .post(controller.post);

    productRouter.route('/products/:Id')
        .get(controller.get)
        .put(controller.put)
        .delete(controller.remove);
    
    productRouter.route('/ProductsByBrandId')
        .get(controller.get);
    
    productRouter.route('/ProductsByGreaterThanOrEqualStars')
        .get(controller.get);
    
    productRouter.route('/ProductsByLessThanOrEqualStars')
        .get(controller.get);

    return productRouter;
};

module.exports = routes;