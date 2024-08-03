var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Get information from MongoDB user table
  // res.send('List of users in json format here'); 

  res.setHeader('Content-Type', 'application/json');
    res.json({msg: 'This is CORS-enabled for all origins!'})
});

router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, username, password } = req.body;
  //   if (!['admin', 'public'].includes(role)) return res.status(400).json({ message: 'Invalid role' });

    const newUser = new User({ username, password, role });
    await newUser.save();
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
