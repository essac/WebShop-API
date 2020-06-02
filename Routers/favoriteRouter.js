const express = require('express');
const favoritesController = require('../controllers/favoritesController');

const routes = () => {
    const favoriteRouter = express.Router();
    const controller = favoritesController();

    favoriteRouter.route('/favorites')
        .get(controller.get)
        .post(controller.post)
        .delete(controller.remove);
    favoriteRouter.route('/favoritescounts')
        .get(controller.get);

    return favoriteRouter;
};

module.exports = routes;