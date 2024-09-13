import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserPreferences = () => {
  const [preferences, setPreferences] = useState([]);

  useEffect(() => {
    const fetchPreferences = async () => {
      const response = await axios.get('/api/preferences');
      setPreferences(response.data);
    };
    fetchPreferences();
  }, []);

  return (
    <div className="user-preferences">
      <h2>Your Favorite Locations</h2>
      <ul>
        {preferences.map((location, index) => (
          <li key={index}>{location}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPreferences;
