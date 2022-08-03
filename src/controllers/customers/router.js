const express = require('express');
const rescue = require('express-rescue');

const list = require('./list');
const create = require('./create');
const update = require('./update');
const remove = require('./remove');

const router = express.Router({ mergeParams: true });

router.get('/search', rescue(list));
router.post('/', rescue(create));
router.put('/:id', rescue(update));
router.delete('/:id', rescue(remove));

module.exports = router;
