import React, { useState } from 'react';
import axios from 'axios';

const SettingsPage = () => {
  const [location, setLocation] = useState('');

  const handleSave = async () => {
    if (location) {
      await axios.post('/api/preferences', { location });
      setLocation('');
    }
  };

  return (
    <div className="settings-page">
      <h2>Manage Your Preferences</h2>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Add favorite location"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default SettingsPage;
