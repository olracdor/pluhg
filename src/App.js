import React from 'react';
import './App.css';
import Navigation from './Navigation';
import MainContent from './MainContent';
import SideBar from './SideBar';

function App() {
  
  return (
    <div class="layout">
      <Navigation />
      <SideBar />
     <MainContent/>
    </div>
    
  );
  
}


export default App;
