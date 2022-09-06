const router = require('express').Router();
const categoryRoutes = require('./categoryRoute');
const productRoutes = require('./productRoute');
const tagRoute = require('./tagRoute');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoute);

module.exports = router;