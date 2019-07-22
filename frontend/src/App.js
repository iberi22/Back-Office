import React from 'react';
import SideBar from './components/Sidebar/SideBar';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import './App.css';

function App() {
  return (
    <div className="App" >
      <Header />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
