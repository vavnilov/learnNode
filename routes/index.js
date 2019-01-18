const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.render('hello', {
    name: "Vadim",
    lastName: "Avnilov"
  });
});

module.exports = router;
