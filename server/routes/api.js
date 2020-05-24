const express = require('express');
const router = express.Router();

/* GET API health-check */
router.get('/health-check', (req, res) => {
    return res.SuccessHandler('API Works OK');
});

module.exports = router;