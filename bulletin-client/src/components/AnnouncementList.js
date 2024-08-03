import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, ListGroup, Button } from 'react-bootstrap';

const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/announcements');
        setAnnouncements(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAnnouncements();

    // Check if the user is an admin
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const { role } = JSON.parse(atob(token.split('.')[1]));
        if (role === 'admin') {
          setIsAdmin(true);
        }
      } catch (err) {
        console.error('Failed to decode token');
      }
    }
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/announcements/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setAnnouncements(announcements.filter(ann => ann._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Announcements</h2>
      <ListGroup>
        {announcements.map((ann) => (
          <ListGroup.Item key={ann._id}>
            <h4>{ann.title}</h4>
            <p>{ann.organization} - {ann.location}</p>
            <p>Contact: {ann.contactNumber}</p>
            {isAdmin && (
              <Button variant="danger" onClick={() => handleDelete(ann._id)}>
                Delete
              </Button>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default AnnouncementList;
