const express = require('express');
const { addContent, getContents, updateContent, deleteContent } = require('../controllers/content');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

router.get('/', getContents);
router.post('/', verifyToken, addContent);
router.patch('/:id', updateContent);
router.delete('/:id', deleteContent);

module.exports = router;
