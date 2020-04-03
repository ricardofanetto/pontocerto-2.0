import React from 'react';

import './style.scss';

import Sidebar from '../Layout/Sidebar';

export default function Dashboard() {

  return (
    <div className="b-container">
      <Sidebar />
      <div className="container">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
}
