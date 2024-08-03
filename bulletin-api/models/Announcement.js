const mongoose = require('mongoose');

const AnnouncementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  organization: { type: String, required: true },
  location: { type: String, required: true },
  contactNumber: { type: String, required: true },
});

module.exports = mongoose.model('Announcement', AnnouncementSchema);
