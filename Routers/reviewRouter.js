const express = require('express');
const reviewsController = require('../controllers/reviewsController');

const routes = () => {
    const reviewRouter = express.Router();
    const controller = reviewsController();

    reviewRouter.route('/reviews')
        .get(controller.get)
        .post(controller.post)
        .put(controller.put)
        .delete(controller.remove);

    reviewRouter.route('/ReviewsByCustomerId')
        .get(controller.get);

    reviewRouter.route('/ReviewsByProductId')
        .get(controller.get);

    return reviewRouter;
};

module.exports = routes;