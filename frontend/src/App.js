import React from 'react';
import SideBar from './components/Sidebar/SideBar';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import './App.css';

function App() {
  return (
    <div className="App" >
    	<div className="parentContent">
	      <Header />
	      <Content />
    	</div>
      <SideBar />
    </div>
  );
}

export default App;
