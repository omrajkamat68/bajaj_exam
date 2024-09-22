const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController'); 

router.get('/', apiController.getHandler);

router.post('/', apiController.postHandler);

module.exports = router;
