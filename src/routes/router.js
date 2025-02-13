const router = require('express').Router();
const { verifyAuthorization } = require('../middlewares/verify');

// Import files

const clientes = require('../controllers/clientes');



// Use routes
router.use('/clientes/',  clientes);



module.exports = router;
