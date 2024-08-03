router.post('/users', async (req, res) => {
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