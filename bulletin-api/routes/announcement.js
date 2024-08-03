const express = require('express');
const router = express.Router();
const Announcement = require('../models/Announcement');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

// Create an announcement
router.post('/', async (req, res) => {
  try {
    const { title, organization, location, contactNumber } = req.body;
    const newAnnouncement = new Announcement({ title, organization, location, contactNumber });
    await newAnnouncement.save();
    res.status(201).json(newAnnouncement);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read all announcements
router.get('/', async (req, res) => {
  try {
    const announcements = await Announcement.find();
    res.json(announcements);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update an announcement
router.put('/:id', async (req, res) => {
  try {
    const { title, organization, location, contactNumber } = req.body;
    const updatedAnnouncement = await Announcement.findByIdAndUpdate(
      req.params.id,
      { title, organization, location, contactNumber },
      { new: true }
    );
    res.json(updatedAnnouncement);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete an announcement
router.delete('/:id', async (req, res) => {
  try {
    await Announcement.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
