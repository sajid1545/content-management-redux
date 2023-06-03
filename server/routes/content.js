const express = require('express');
const { addContent, getContents } = require('../controllers/content');
const router = express.Router();

router.post('/', addContent);
router.get('/', getContents);

module.exports = router;
