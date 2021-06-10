import React from 'react';

import './DashboardInformation.css';

const DashboardInformation = ({ username }) => {
  return (
    <div className='dashboard_info_text_container'>
      <span className='dashboard_info_text_title'>
        Hello {username}! Welcome to CHIMEZ.
      </span>
      <span className='dashboard_info_text_description'>
        Start a call by selecting a person from the list or
        Create / Join group call (Rooms).
      </span>
    </div>
  );
};

export default DashboardInformation;
