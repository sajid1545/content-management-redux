const express = require('express');
const { addContent, getContents, updateContent } = require('../controllers/content');
const router = express.Router();

router.post('/', addContent);
router.get('/', getContents);
router.patch('/:id', updateContent);

module.exports = router;
