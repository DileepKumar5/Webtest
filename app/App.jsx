import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './index.css';

function App() {
  return (
    <div className="flex min-h-screen bg-white text-gray-900">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;