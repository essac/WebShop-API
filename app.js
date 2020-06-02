const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const addressRouter = require('./routers/addressRouter')();
app.use('/api', addressRouter);

const categoryRouter = require('./routers/categoryRouter')();
app.use('/api', categoryRouter);

const basicCartRouter = require('./routers/basicCartRouter')();
app.use('/api', basicCartRouter);

const countryRouter = require('./routers/countryRouter')();
app.use('/api', countryRouter);

const productRouter = require('./routers/productRouter')();
app.use('/api', productRouter);

const brandRouter = require('./routers/brandRouter')();
app.use('/api', brandRouter);

const taxRouter = require('./routers/taxRouter')();
app.use('/api', taxRouter);

const productImageRouter = require('./routers/productImageRouter')();
app.use('/api', productImageRouter);

const productCategoryRouter = require('./routers/productCategoryRouter')();
app.use('/api', productCategoryRouter);

const orderRowRouter = require('./routers/orderRowRouter')();
app.use('/api', orderRowRouter);

const promoCodeRouter = require('./routers/promoCodeRouter')();
app.use('/api', promoCodeRouter);

const promoTypeRouter = require('./routers/promoTypeRouter')();
app.use('/api', promoTypeRouter);

const customerRouter = require('./routers/customerRouter')();
app.use('/api', customerRouter);

const favoriteRouter = require('./routers/favoriteRouter')();
app.use('/api', favoriteRouter);

const shippingMethodRouter = require('./routers/shippingMethodRouter')();
app.use('/api', shippingMethodRouter);

const paymentMethodRouter = require('./routers/paymentMethodRouter')();
app.use('/api', paymentMethodRouter);

const orderStatusRouter = require('./routers/orderStatusRouter')();
app.use('/api', orderStatusRouter);

const cartRouter = require('./routers/cartRouter')();
app.use('/api', cartRouter);

const reviewRouter = require('./routers/reviewRouter')();
app.use('/api', reviewRouter);

const orderRouter = require('./routers/orderRouter')();
app.use('/api', orderRouter);

app.server = app.listen(port, () => {
    console.log(`Running on port ${port}`);
});

module.exports = app;